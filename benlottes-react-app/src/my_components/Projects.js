import React from 'react'
import ProjectPane from './ProjectPane'

class Projects extends React.Component{
    render(){
        return (
            <div name="Projects" className='flexbox-container'>
                <ProjectPane name="Test" url="https://github.com/benlottes/BudgetTracker"> This would be a description </ProjectPane>
                <ProjectPane name="Test2"> This would be another description </ProjectPane>
            </div>
        )
    }
}

export default Projects