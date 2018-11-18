import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
    
    return (
        <ul className="mylist">
           { props.videos.map((video) =>{
                return (
                    <VideoListItem onVideoSelect={props.onVideoSelect} key={video.id} video={video} />
                    );
                })  
            }
        </ul>
    );
};

export default VideoList;