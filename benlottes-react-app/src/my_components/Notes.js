import React, { useCallback } from 'react'
import NoteSearchBar from './NoteSearchBar'
import NewNoteButton from './NewNoteButton'
import RecentNoteList from './RecentNoteList'
import axios from 'axios'
import { Navigate } from 'react-router-dom'


function registerClick(){
    axios.get("http://localhost:4000/logout", {withCredentials: true}).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
}

class Notes extends React.Component{
    constructor(props){
        super(props);
        this.state = { users_name : ""};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/loggedin', {withCredentials: true}).then (response => {
            if(!response.data){
                window.history.pushState(null, "", "/Notes/login");
                window.location.reload();
                console.log("User is not logged in, returning to login page.");
            }else{
                this.setState({ users_name : response.data.firstName });
            }
        }).catch(function(error){
            console.log(error);
        });
    }

    render(){
        return (
            <div name="note">
                {this.state.users_name &&<h1>Welcome, {this.state.users_name}!</h1>}
                <a href="http://localhost:3000/Notes/login">
                    <button type="button" onClick={registerClick}>Logout</button>
                </a>
                <NoteSearchBar />
                <NewNoteButton />
                <RecentNoteList />
            </div>
        )
    }
}

export default Notes