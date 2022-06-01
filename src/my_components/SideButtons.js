import React from 'react'
import { NavLink } from 'react-router-dom'

class Sidebuttons extends React.Component{
    render(){
        return (
            <><div name="home_button">
                <NavLink to="/">Home</NavLink>
            </div><div name="projects_button">
                <NavLink to="/Projects">Projects</NavLink>
            </div><div name="resume_button">
                <NavLink to="/Resume">Resume</NavLink>
            </div><div name="experience_button">
                <NavLink to="/Experience">Experience</NavLink>
            </div></>
        )
    }
}

export default Sidebuttons