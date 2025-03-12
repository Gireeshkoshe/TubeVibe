import React from 'react'
const Comments = ({info}) => {
    const {name,text}=info;

  return (
    <div className='flex  bg-gray-200 my-2 '>
        <img
            className='w-10 h-8'
            alt='user'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjocfAiPmkzqDQu_tmtXKQPauoSBwQIwT1iDtMsAPA2SPucnhwVz-k9-rplQqmWDUI5uA&usqp=CAU'
        ></img>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comments
