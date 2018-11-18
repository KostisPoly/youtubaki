import React, {Component} from 'react';
import logo from ".././logo.jpg";

class SearchBar extends Component {
    constructor (props) {
        super(props);

        this.state = {
            term: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }
    render () {
        return (<div id="search-div">
            <img src={logo} alt="logo" title="Youtubaki" />
            <input value={this.state.term} onChange={this.onInputChange} />
            <div className="para-parent">
              <p className="paragraph">
                Default search is puppies because... &hearts;
              </p>
            </div>
        </div>);
    }
    
    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
        this.props.onSearchTermChange(event.target.value);
    }
}

export default SearchBar;