import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constans';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const[videos,setvideos]=useState([]);
  const getVideos=async()=>{
    const data= await fetch(YOUTUBE_VIDEOS_API);
    const json=await data.json();
    setvideos(json.items);
   }
  useEffect(()=>{
      getVideos();
  },[]);
  return (
    <div className='flex flex-wrap bg-gray-100 p-5'>
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v="+video.id} >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer
