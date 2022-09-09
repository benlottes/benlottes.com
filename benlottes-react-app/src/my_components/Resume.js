import React from 'react'
import CenterView from 'react-bootstrap/Container'
import myResume from '../resources/Ben_Lottes_Resume.pdf'

class Resume extends React.Component{
    render(){
        return (
            <CenterView className='page-content'>
                <div name="Resume">
                    <iframe
                        title="file"
                        style={{ width: '250%', height: '400%' }}
                        src={myResume}
                    />
                </div>
            </CenterView>
        )
    }
}

export default Resume