import React from 'react'
import ProjectPane from './ProjectPane'
import CenterView from 'react-bootstrap/Container'

class Projects extends React.Component{
    render(){
        return (
            <CenterView name="Projects" className='flexbox-container'>
                <ProjectPane name="Test" 
                             image_path={require("./../resources/placeholder.jpg")} 
                             url="https://github.com/benlottes/BudgetTracker"> 
                             This would be a description 
                </ProjectPane>
                <ProjectPane name="Test2"> This would be another description </ProjectPane>
                <ProjectPane name="Test3"> This would be another description </ProjectPane>
            </CenterView>
        )
    }
}

export default Projects