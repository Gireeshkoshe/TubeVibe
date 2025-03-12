import React, { useEffect, useState } from 'react'
import Chatmessage from './Chatmessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const dispatch=useDispatch();
    const [liveMessage,setLiveMessage]=useState("");
    const chatMessage=useSelector((store)=>store.chat.messages)
    useEffect(()=>{
        const timer=setInterval(()=>{
            dispatch(addMessage({
                name:generateRandomName(),
                message:makeRandomMessage(20)
            }))
        },1500)

        return ()=>{clearInterval(timer)};
    },[])
  return (
    <div>
        <div className='ml-2 p-2  h-[500px] border border-black bg-slate-200 overflow-y-scroll overflow-x-scroll flex flex-col-reverse' >
            
        {chatMessage.map((c,index)=>(
                <Chatmessage key={index} name={c.name} message={c.message}/>  
            ))}
        </div>
        <form className='p-2 m-2 border border-black w-full flex' 
            onSubmit={(e)=>{
                e.preventDefault();
                dispatch(addMessage({
                    name:"Gireesh Koshe",
                    message:liveMessage
                }))
                setLiveMessage("");
            }}
        >
            
            <input  className='px-2 w-full'
                type='text'
                value={liveMessage}
                onChange={(e)=>setLiveMessage(e.target.value)}
            />
            <button className='px-2 mx-2 bg-green-100'>Send</button>
        </form>
    </div>
  )
}

export default LiveChat
