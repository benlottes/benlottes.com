import React from 'react'
import axios from 'axios'

class NewNoteButton extends React.Component{

    constructor(props){
        super(props);
        this.state = { isShown: false, title: "", content: ""};
        this.displayNewNote = this.displayNewNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.retreiveTags = this.retreiveTags.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    retreiveTags(){
        let tags = [];
        for (let i = 0; i < this.state.content.length; i++){
            if(this.state.content[i] === "#"){
                let tag = "";
                while(this.state.content[i] !== " "){
                    tag += this.state.content[i];
                    i++;
                }
                tags.push(tag);
            }
        }
    }
    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }
    displayNewNote(e) {
        //displays empty note
        e.preventDefault();
        this.setState({isShown: true});
    }
    saveNote(e){
        //Save note to database
        e.preventDefault();

        if(this.state.title !== ""){
            this.setState({isShown: false});

            //let tags = this.retreiveTags();

            const note = {
                note_title: this.state.title,
                note_content: this.state.content,
                note_date: new Date(),
                note_owner: "",
                note_tags: []
            };

            axios.post('http://localhost:4000/Notes', note).then(res => console.log(res.data));

            console.log("Saving note...");
            console.log("Title: " + note.note_title);
            console.log("Content: " + note.note_content);
            console.log("Date: " + note.note_date);
            console.log("Owner: " + note.note_owner);
            console.log("Tags: " + note.note_tags);

            this.setState({title: "", content: ""});
        }else{
            alert("Title is required");
        } 
    }

    render(){
        return (
            <div>
                <button id="newnotebutton" onClick={this.displayNewNote}>New Note</button>
                {this.state.isShown && (
                    <div>
                        <div>
                            <h1>
                            <input 
                                type="text" 
                                placeholder="Add a title" 
                                id="title" 
                                value={this.state.title}
                                onChange={this.handleChange}/>
                            </h1>
                            <textarea
                                placeholder="Content" 
                                id="content"
                                value={this.state.content}
                                rows={8}
                                cols={42}
                                onChange={this.handleChange}/>
                        </div>
                        <button id="save" onClick={this.saveNote}>Submit</button>
                    </div>
                )}
            </div>
        )
    }
}

export default NewNoteButton