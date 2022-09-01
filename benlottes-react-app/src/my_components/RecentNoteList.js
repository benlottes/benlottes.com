import React from 'react'
import axios from 'axios'
import SingleNote from './SingleNote'

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
            return <Note note={currentNote} key={i} />
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
    componentDidUpdate(){
        console.log("UPDATE DETECTED");
    }

    render(){
        return (
            <div name="displayed_notes" className="flexbox-container">
                {this.noteList()}
            </div>
        )
    }
}

export default NoteList