import React from 'react'
import CenterView from 'react-bootstrap/Container'
import NamePlate from './NamePlate'
class Home extends React.Component{
    render(){
        return (
            <CenterView>
                <div name="Bio" className='home'>
                    <div className='bio-align'>
                        <h1>This is a bio!</h1>
                        <NamePlate/>
                    </div>
                </div>
            </CenterView>
        )
    }
}

export default Home