import React from 'react'

class Notes extends React.Component{

    render(){
        return (
            <div name="note">
                <h1>This is a Note page!!</h1>
                <a href="http://localhost:4000/auth/google">
                    <button type="button">Login with Google</button>
                </a>
            </div>
        )
    }
}

export default Notes