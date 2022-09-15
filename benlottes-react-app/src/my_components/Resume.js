import React from 'react'
import CenterView from 'react-bootstrap/Container'
import myResume from '../resources/Ben_Lottes_Resume.pdf'

class Resume extends React.Component{
    render(){
        return (
            <CenterView >
                <div name="Resume" className='resume'>
                    <iframe
                        title="file"
                        style={{ width: '100%', height: '800px' }}
                        src={myResume}
                    />
                </div>
            </CenterView>
        )
    }
}

export default Resume