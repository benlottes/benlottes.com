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
                             to improve the app by implementing client side encryption first. I
                             also want to rework the architecture of the components, at the moment 
                             there are a lot of screen refreshes when updating the notes. I also
                             think the layout could be improved by structuring the CSS better so 
                             that the components don't move around so much.
                </ProjectPane>
                <ProjectPane name="Pennyworth" 
                             image_path={require("./../resources/PennyWorth.png")} 
                             url="https://github.com/benlottes/BudgetTracker"> 
                             In my software engineering class, a group of my classmates and I
                             decided to create a budgeting app. We decided to write the application 
                             in Java and used the JavaFX library for the GUI. Writing this piece of 
                             software in Java helped me learn a lot about the design priciples of
                             Object Oriented Programming; while I knew the basics of OOP, I had never
                             fully fleshed out an application like this one. Overall ,I think the app 
                             turned out well, though the efficiency of churning data and plotting the 
                             graphs could be improved. I also wish we had the time to improve upon the 
                             spending categories, as their implementation is rigid.
                </ProjectPane>
            </CenterView>
        )
    }
}

export default Projects