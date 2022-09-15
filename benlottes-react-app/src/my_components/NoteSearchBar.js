import React from 'react'
import SingleNote from './SingleNote'
import axios from 'axios'
import NewNoteButton from './NewNoteButton'

const Note = (props) => {
    return (
        <div>
            <SingleNote title={props.note.note_title} content={props.note.note_content} note={props.note} />
        </div>
    )
}


class NoteSearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = { value: '', should_update_recents: true, search_notes: [], recent_notes: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.updateRecents = this.updateRecents.bind(this);
    }

    handleSearch(val){
        axios.get('http://localhost:4000/Notes/search/'+val, {withCredentials: true})
            .then(response => {
                if(response.data){
                    this.setState({ search_notes: response.data });
                }else{
                    this.setState({ search_notes: [] });
                }
            }).catch(function(error){
                console.log(error);
            });
    }

    updateRecents(){
        axios.get('http://localhost:4000/Notes/loggedin', {withCredentials: true})
        .then(response => {
            if(response.data){
                this.setState({ recent_notes: response.data });
            }else{
                this.setState({ recent_notes: [] });
            }
        }).catch(function(error){
            console.log(error);
        });
    }
    noteListRecents(){
        try{
            console.log("running notelistrecents")
            if(this.state.value === "" && this.state.recent_notes.length > 0){
                this.should_update_recents = false;
                this.search_notes = [];
                return this.state.recent_notes.map(function(currentNote, i){
                    return <Note note={currentNote} key={i} />
                })
            }
        }catch(err){
            console.log(err);
        }
    }
    noteListSearch(){
        try{
            if(this.state.value !== "" && this.state.search_notes.length > 0){
                this.should_update_recents = true;
                this.recent_notes = [];
                return this.state.search_notes.map(function(currentNote, i){
                    return <Note note={currentNote} key={i} />
                })
            }
        }catch(err){
            console.log(err);
        }
    }

    handleChange(e) {
        e.preventDefault();

        let new_val = e.target.value;
        this.setState({value: new_val});
        if(new_val !== ""){
            this.search_notes = [];
            this.recent_notes = [];
            this.handleSearch(new_val);
        }else{
            this.search_notes = [];
            this.recent_notes = [];
            this.updateRecents();
        }
    } 

    componentDidMount(){
        this.updateRecents();
    }

    render(){
        return (
            <div>
                <div name="search_notes" className="note-grid">
                    <div>
                        <div name="searchbar">
                            <input type="text" id="searchbar" placeholder="Search..." onChange={this.handleChange} />
                        </div>
                        <NewNoteButton />
                    </div>
                    {this.state.search_notes && this.noteListSearch()}
                    {this.state.recent_notes && this.noteListRecents()}
                </div>
            </div>
        )
    }
}

export default NoteSearchBar