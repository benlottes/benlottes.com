import React from 'react'
import CenterView from 'react-bootstrap/Container'
import NamePlate from './NamePlate'
class Home extends React.Component{
    render(){
        return (
            <CenterView style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div name="Bio" className='home'>
                    <div className='bio-align'>
                        <NamePlate/>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', maxWidth: '600px'}}>
                            <h1><u>Hello!</u></h1>
                            <p style={{ textAlign: 'justify' }}>
                               My name is Ben Lottes, I recently graduated from The University of Kansas 
                               after completing a Bachelor's degree in computer science and a certificate 
							   in cyber security. I'm a hard worker, excel at problem solving and I 
							   hope to land a job where I can continue to learn and grow as a developer. 
							   I find myself much more confident working on the logic in the backend of 
							   applications; nothing feels better than finding an elegant solution to a 
							   tough problem. I am currently applying for full-time positions, so please
							   feel free to reach out to me at my email address above!
                            </p>
                        </div>                
                    </div>
                </div>
            </CenterView>
        )
    }
}

export default Home