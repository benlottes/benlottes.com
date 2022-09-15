import React from 'react'
import ProjectPane from './ProjectPane'
import CenterView from 'react-bootstrap/Container'

class Projects extends React.Component{
    render(){
        return (
            <CenterView name="Projects" className="projects">
                <ProjectPane name="Notes" 
                             image_path={require("./../resources/Note_App.png")} 
                             url="/Notes/login"> 
                             With this project, I was looking to expose myself to the process 
                             of creating a full-stack web app. I selected the MERN stack because
                             I wanted to expose myself to a NO-SQL database, as well as react,
                             having heard how modular and intuitive it is. In the future I hope 
                             to improve the app by impletmenting client side encryption first. I
                             also want to rework the architechure of the components, at the moment 
                             there are a lot of screen refreshes when updating the notes. I also
                             think the layout could be improved by struturing the CSS better so 
                             that the comonents don't move around so much.

                </ProjectPane>
                <ProjectPane name="Test2"> This would be another description </ProjectPane>
                <ProjectPane name="Test3"> This would be another description </ProjectPane>
            </CenterView>
        )
    }
}

export default Projects