import React from 'react'
import { IndexRoute, Routes, Route } from 'react-router-dom'
import Home from './Home.js'
import Projects from './Projects.js'
import Resume from './Resume.js'
import Notes from './Notes.js'
import Notes_blank from './Notes_blank.js'

class NavRoutes extends React.Component{
    render(){
        return (
            <Routes>
                <Route exact path="/" style={{margin: '0px'}} element={<Home/>}/>
                <Route path="/Projects" element={<Projects/>}/>
                <Route path="/Resume" element={<Resume/>}/>
                <Route path="/Notes/login" element={<Notes_blank/>}/>
                <Route path="/Notes/loggedin" element={<Notes/>}/>
            </Routes>
        )
    }
}

export default NavRoutes