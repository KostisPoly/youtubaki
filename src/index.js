import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import youtubeSearch from 'youtube-search';
//let youtubeSearch = require("youtube-search");

const API_KEY = 'AIzaSyC6jHe8b9tQ1STC0NvOZaRaWz90sMnUolc';




class App  extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selected: null
        };
        //this.youtubeSearch = this.youtubeSearch.bind(this);
        this.termSearch('puppy');
    }
    
    termSearch(term) {
        let opts = { maxResults: 10, key: API_KEY };
        
        youtubeSearch(term, opts, (err, results) => {
            if (err) return console.log(err);

            this.setState({
                videos: results,
                selected: results[0]
            });

        });
    }
    

    render () {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.termSearch(term)} />
                <VideoDetail video={this.state.selected}/>
                <VideoList onVideoSelect={selected => this.setState({selected: selected})} videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

