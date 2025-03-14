import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from "./LiveChat"


const WatchPage = () => {
    const [searchParams]=useSearchParams();

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div className='flex flex-col w-full '>
        <div className='flex px-5'>  
                <div className=''>
                    <iframe
                        width="1000"
                        height="500" 
                        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe>
                </div>
            <div className='w-full'>
                <LiveChat/>
            </div>
        </div>
        <CommentsContainer/>
    </div>
  )
}

export default WatchPage
