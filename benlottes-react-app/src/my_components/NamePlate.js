import React from 'react'
import Image from 'react-bootstrap/Image'

class NamePlate extends React.Component{
    render(){
        return (
            <div name="Bio">
                <div name="name_photo" className="name-plate">
                    <Image src={require("./../photos/placeholder.jpg")} className="img-thumbnail" style={{width : 75, height: 75, borderRadius: 100/2}} />
                    <h1 name="my_name">Ben Lottes</h1>
                </div>
                <a name="github_link" href="https://github.com/benlottes" target="_blank" rel="noreferrer noopener">My github</a>
                <p name="email">benclottes@gmail.com</p>
            </div>
        )
    }
}

export default NamePlate