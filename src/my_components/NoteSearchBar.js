import React from 'react'

class NoteSearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(val){
        //Update searched items from database
        //if val is empty, show most recent notes
        //if val is not empty, show notes that match the search
        //make sure to parse out dangerous input and prevent XSS
        //also extract hashtags and search for them
        console.log(val)
    }

    handleChange(e) {
        e.preventDefault();

        let new_val = e.target.value;
        this.setState({value: new_val});
        this.handleSearch(new_val);
    }

    render(){
        return (
            <div name="searchbar">
                <input type="text" id="searchbar" placeholder="Search..." onChange={this.handleChange} />
            </div>
        )
    }
}

export default NoteSearchBar