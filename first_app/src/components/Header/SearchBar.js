import React from "react";

class SearchBar extends React.Component {
    state = {term: ''};
    onInputChange = (event) => {
        this.setState({
            term:event.target.value
        })
        console.log(event.target.value)

    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
            <div class="ui search">
                <div onSubmit={this.onFormSubmit} class="ui icon input">
                    <input value={this.state.term}  onChange={this.onInputChange} class="prompt" type="text" placeholder="Search"></input>
                    <i class="search icon"></i>
                </div>
            </div>
        )
    }

}

export default SearchBar ;