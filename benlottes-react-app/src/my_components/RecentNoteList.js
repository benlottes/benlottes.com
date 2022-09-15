import React from 'react'
import axios from 'axios'
import SingleNote from './SingleNote'
import CenterView from 'react-bootstrap/Container'
import CenterGrid from 'react-bootstrap/Container'

const Note = (props) => {
    return (
        <div>
            <SingleNote title={props.note.note_title} content={props.note.note_content} note={props.note} />
        </div>
    )
}

class NoteList extends React.Component{

    constructor(props){
        super(props);
        this.state = { recent_notes: []};
    }

    noteList(){
        return this.state.recent_notes.map(function(currentNote, i){
            return <Note className="note-grid" note={currentNote} key={i} />
        })
    }

    componentDidMount(){
        axios.get('http://localhost:4000/Notes/loggedin', {withCredentials: true})
            .then(response => {
                this.setState({ recent_notes: response.data });
            }).catch(function(error){
                console.log(error);
            });
    }

    render(){
        return (
            <CenterGrid name="displayed_notes" className="note-grid">
                {this.noteList()}
            </CenterGrid>
        )
    }
}

export default NoteList