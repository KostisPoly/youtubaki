import React from 'react';

const VideoListItem = (props) => {
    
   return(
       <li onClick={() => props.onVideoSelect(props.video)}>
           <div className="media-header">
               <img src={props.video.thumbnails.default.url} alt="" />
           </div>
           <div className="media-body">{props.video.title}</div>
       </li>
   ); 
}

export default VideoListItem;