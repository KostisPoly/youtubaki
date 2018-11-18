import React from 'react';

const VideoDetail = (props) => {
    
    if(!props.video){
        return <div>Loading...</div>;
    }

    let videoId = props.video.id;
    let embedVid = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div>
            <div className="video-content">
                <iframe src={embedVid} frameBorder="0"></iframe>
            </div>
            <div className="details">
                <div className="details-title">{props.video.title}</div>
                <div className="details-desc">{props.video.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;