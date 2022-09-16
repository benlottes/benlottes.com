import React from 'react'
import Image from 'react-bootstrap/Image'

class NamePlate extends React.Component{
    render(){
        return (
            <div name="Bio" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <div name="name_photo" className="name-plate" style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <Image src={require("./../resources/placeholder.jpg")} className="img-thumbnail" style={{width : 175, height: 175, borderRadius: 350/2}} />
                    <h1 name="my_name" style={{ fontsize: '300%' }}>Ben Lottes</h1>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                    <p name="email">benclottes@gmail.com</p>
                    <a name="github_link" href="https://github.com/benlottes" target="_blank" rel="noreferrer noopener">My github</a>
                </div>
            </div>
        )
    }
}

export default NamePlate