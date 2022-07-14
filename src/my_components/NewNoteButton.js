import React from 'react'
import SingleNote from './SingleNote';

class NewNoteButton extends React.Component{

    constructor(props){
        super(props);
        this.state = { isShown: false };
        this.displayNewNote = this.displayNewNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
    }

    displayNewNote(e) {
        //displays empty note
        e.preventDefault();
        this.setState({isShown: true});
    }
    saveNote(e){
        //Save note to database
        e.preventDefault();
        this.setState({isShown: false});
    }

    render(){
        return (
            <div name="searchbutton">
                <button id="newnotebutton" onClick={this.displayNewNote}>New Note</button>
                {this.state.isShown && (
                    <div>
                        <SingleNote id="newnote"/>
                        <button id="save" onClick={this.saveNote}>Submit</button>
                    </div>
                )}
            </div>
        )
    }
}

export default NewNoteButton