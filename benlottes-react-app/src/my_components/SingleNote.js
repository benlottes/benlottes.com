import React from 'react'
import axios from 'axios'


class SingleNote extends React.Component{

    constructor(props){
        super(props);
        this.state = { title: this.props.title, content: this.props.content };
        this.noteObj = this.props.note;
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    deleteNote(){
        const confirmDialog = window.confirm("Are you sure you want to delete this note?");
        if(confirmDialog){
            axios.delete('http://localhost:4000/Notes/' + this.noteObj._id);
            window.location.reload();
        }
    }
    handleChangeTitle(e){
        //Save note to database
        e.preventDefault();
        this.setState({title : e.target.value});

        if(this.state.title !== ""){
            //let tags = retreiveTags();      
            console.log("Saving change...");
            this.noteObj.note_title = e.target.value;
            axios.patch('http://localhost:4000/Notes/' + this.noteObj._id, this.noteObj);
        }
    }
    handleChangeContent(e){
        //Save note to database
        e.preventDefault();
        this.setState({content : e.target.value});

        if(this.state.title !== ""){
            //let tags = retreiveTags();
            console.log("Saving change...");
            this.noteObj.note_content = e.target.value;
            axios.patch('http://localhost:4000/Notes/' + this.noteObj._id, this.noteObj);
        }
    }
    render(){
        return (
            <div className='note'>
                <h1 className="flexbox-container">
                <input
                    className="note-title" 
                    type="text" 
                    placeholder="Add a title!" 
                    id="title" 
                    value={this.state.title}
                    onChange={this.handleChangeTitle} />
                <button onClick={this.deleteNote}>X</button>
                </h1>
                <textarea
                    className='note-content'
                    placeholder="Content" 
                    id="content"
                    value={this.state.content}
                    onChange={this.handleChangeContent}
                    rows={10}
                    cols={42} />
            </div>
        )
    }
}

export default SingleNote