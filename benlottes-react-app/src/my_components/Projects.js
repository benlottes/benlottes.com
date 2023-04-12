import React from 'react'
import ProjectPane from './ProjectPane'
import CenterView from 'react-bootstrap/Container'

class Projects extends React.Component{
    render(){
        return (
            <CenterView name="Projects" className="projects">
                <ProjectPane name="Sign Language Interpreter" 
                             image_path={require("./../resources/ASL_Interp.png")} 
                             url="https://github.com/benlottes/Sign-Language-Interpreter"> 
                             This is my Senior Capstone Project that I worked on with four of my classmates. 
                             We set out to create a program using machine learning that could interpret ASL 
                             and output a spoken English sentence. I was in charge of designing and implementing
                             the models that we used to make these interpretations. To do this I took advantage of 
                             reasearch done by the Smile Lab at Northeastern University. I was able to simplify 
                             some of their models to support our smaller dataset, and we were able to achieve a 
                             90% accuracy on our test set using an ensemble of six different models.
                </ProjectPane>
                <ProjectPane name="Notes" 
                             image_path={require("./../resources/Note_App.png")} 
                             url="/Notes/login"> 
                             With this project, I was looking to expose myself to the process 
                             of creating a full-stack web app. I selected the MERN stack because
                             I wanted to expose myself to a NO-SQL database, as well as React,
                             having heard how modular and intuitive it is. In the future, I first
                             hope to improve the app by implementing client side encryption. I
                             also want to rework the architecture of the components, at the moment 
                             there are a lot of screen refreshes when updating the notes. I also
                             think the layout could be improved by structuring the CSS better so 
                             that the components don't move around so much.
                </ProjectPane>
                <ProjectPane name="Pennyworth" 
                             image_path={require("./../resources/PennyWorth.png")} 
                             url="https://github.com/benlottes/BudgetTracker"> 
                             Pennyworth was a collaborative effort between me and four of my classmates
                             to create a budgeting app. We decided to write the application 
                             in Java and used the JavaFX library for the GUI. Writing this piece of 
                             software in Java helped me learn a lot about the design priciples of
                             Object Oriented Programming; while I knew the basics of OOP, I had never
                             fully fleshed out an application like this one. Overall, I think the app 
                             turned out well, though the efficiency of plotting the 
                             graphs could be improved. I also wish we had the time to improve upon the 
                             spending categories, as their implementation is rigid.
                </ProjectPane>
            </CenterView>
        )
    }
}

export default Projects