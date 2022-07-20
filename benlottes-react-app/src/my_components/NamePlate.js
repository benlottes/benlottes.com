import React from 'react'

class NamePlate extends React.Component{
    render(){
        return (
            <div name="Bio">
                <h1 name="my_name">Ben Lottes</h1>
                <a name="github_link" href="https://github.com/benlottes" target="_blank" rel="noreferrer noopener">My github</a>
                <p name="email">benclottes@gmail.com</p>
            </div>
        )
    }
}

export default NamePlate