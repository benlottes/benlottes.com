import React from 'react'
import CenterView from 'react-bootstrap/Container'
import myResume from '../resources/Ben_Lottes_Resume.pdf'

class Resume extends React.Component{
    render(){
        return (
            <CenterView className='resume'>
                <div name="Resume" align='center'>
                    <iframe
                        title="file"
                        style={{marginLeft: '150px', marginTop: '-75px', width: '250%', height: '800%' }}
                        src={myResume}
                    />
                </div>
            </CenterView>
        )
    }
}

export default Resume