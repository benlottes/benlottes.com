import React from 'react'

class SingleNote extends React.Component{

    constructor(props){
        super(props);
        this.state = { title: "", content: ""};
    }

    render(){
        return (
            <div>
                <h1>
                <input type="text" placeholder="Add a title" id="title" onChange={this.handleChange} />
                </h1>
                <textarea
                    placeholder="Content" 
                    id="content"
                    onChange={this.handleChange}
                    rows={8}
                    cols={42} />
            </div>
        )
    }
}

export default SingleNote