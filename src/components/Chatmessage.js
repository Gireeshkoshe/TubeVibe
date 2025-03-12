import React from 'react'

const Chatmessage = ({name,message}) => {
  return (
    <div className='flex align-center shadow-sm p-2'>
      <img 
          className='h-8 rounded-full'
          alt='user-icon'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjocfAiPmkzqDQu_tmtXKQPauoSBwQIwT1iDtMsAPA2SPucnhwVz-k9-rplQqmWDUI5uA&usqp=CAU'
        />
        <span className='px-2 font-bold'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default Chatmessage
