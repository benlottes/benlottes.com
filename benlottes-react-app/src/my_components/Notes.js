import React, { useCallback } from 'react'
import NoteSearchBar from './NoteSearchBar'
import NewNoteButton from './NewNoteButton'
import NoteList from './NoteList'
import axios from 'axios'
import { Navigate } from 'react-router-dom'


function registerClick(){
    console.log("Registering click...");
}

class Notes extends React.Component{
    componentDidMount(){
        axios.get('http://localhost:4000/loggedin').then (response => {
            console.log(response.data);
        }).catch(function(error){
            console.log(error);
        });
    }

    render(){
        return (
            <div name="note">
                <h1>This is a Note page!!</h1>
                <a href="http://localhost:4000/logout">
                    <button type="button" onClick={registerClick}>Logout</button>
                </a>
                <NoteSearchBar />
                <NewNoteButton />
                <NoteList />
            </div>
        )
    }
}

export default Notes