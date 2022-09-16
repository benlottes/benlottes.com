import React from 'react'
import CenterView from 'react-bootstrap/Container'

class Notes extends React.Component{

    render(){
        return (
            <CenterView style={{display: 'flex', flexDirection: 'column',  alignItems: 'center', justifyContent: 'center', height: '80vh'}}>
                <h1>Welcome to my Note App!</h1>
                <a style={{ marginTop: "20px"}} href="http://localhost:4000/auth/google">
                    <button type="button">Login with Google</button>
                </a>
                <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '30px'}}>
                   <u>Disclaimer</u><br></br>
                   <b>Please do not store any sensitive information on this site!</b><br></br>
                   Due to time constraints involving school and job applications, I had to take<br></br>
                   some shortcuts. As a result the database I use to store notes is not encrypted.<br></br>
                   The only information stored about your Google account is your first name and<br></br>
                   a unique identifier to keep your notes separate from others, so in the event<br></br>
                   the host server is compromised, your Google account will be safe.<br></br>
                   Thank you!
                </p>
            </CenterView>
        )
    }
}

export default Notes