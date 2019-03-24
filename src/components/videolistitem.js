import React from "react";
const VideoListItem = (props)=>{
    console.log(props.video);
    return (
    <img src={props.video.snippet.thumbnails.default.url} alt={props.notext}/>
    
    )
}
export default VideoListItem;