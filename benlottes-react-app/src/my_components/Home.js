import React from 'react'
import CenterView from 'react-bootstrap/Container'

class Home extends React.Component{
    render(){
        return (
            <CenterView className='page-content'>
                <div name="Bio">
                    <h1>This is a bio!</h1>
                </div>
            </CenterView>
        )
    }
}

export default Home