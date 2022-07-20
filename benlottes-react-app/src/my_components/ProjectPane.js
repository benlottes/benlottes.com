import React from 'react'

class ProjectPane extends React.Component{
    render(){
        return (
            <div>
                <h1>
                <a href={this.props.url} target="_blank" rel="noreferrer noopener">{this.props.name}</a>
                </h1>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default ProjectPane