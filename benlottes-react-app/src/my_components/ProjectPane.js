import React from 'react'
import CenterView from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

class ProjectPane extends React.Component{

    ProjectPane(props){
        this.name = props.name
        this.image_path = props.image_path
        this.getImgPath = this.getImgPath.bind(this)
    }

    getImgPath(img){
        return require(`./../resources/${img}.jpg`);
    }

    render(){
        return (
            <CenterView className='page-content'>
                <div>
                    <h1 className='page-content'>
                        <a href={this.props.url} target="_blank" rel="noreferrer noopener">{this.props.name}</a>
                    </h1>
                    <div name="name_photo">
                        <Image src={this.props.image_path} className="img-thumbnail" style={{width : 300, height: 165}} />
                    </div>
                    <p className='page-content'>{this.props.children}</p>
                </div>
            </CenterView>
        )
    }
}

export default ProjectPane