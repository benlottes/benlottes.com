import React from 'react'
import NoteSearchBar from './NoteSearchBar'
import NewNoteButton from './NewNoteButton'

class Notes extends React.Component{
    render(){
        return (
            <div name="note">
                <h1>This is a Note page!!</h1>
                <NoteSearchBar />
                <NewNoteButton />
            </div>
        )
    }
}

export default Notes