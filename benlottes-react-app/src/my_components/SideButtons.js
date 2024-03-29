import React from 'react'
import { NavLink } from 'react-router-dom'

class Sidebuttons extends React.Component{
    render(){
        return (
            <div className="button-column">
                <div name='my-name'>
                    <h1>Ben<br></br> Lottes</h1>
                </div>
                <div name="home_button">
                    <NavLink to="/">Home</NavLink>
                </div>
                <div name="projects_button">
                    <NavLink to="/Projects">Projects</NavLink>
                </div>
                <div name="resume_button">
                    <NavLink to="/Resume">Resume</NavLink>
                </div>
                <div name="notes_button">
                    <NavLink to="/Notes/login">Notes</NavLink>
                </div>
            </div>
        )
    }
}

export default Sidebuttons