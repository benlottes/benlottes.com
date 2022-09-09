import React from 'react'
import CenterView from 'react-bootstrap/Container'

class ProjectPane extends React.Component{
    render(){
        return (
            <CenterView className='page-content'>
                <div>
                    <h1>
                        <a href={this.props.url} target="_blank" rel="noreferrer noopener">{this.props.name}</a>
                    </h1>

                    <p>{this.props.children}</p>
                </div>
            </CenterView>
        )
    }
}

export default ProjectPane