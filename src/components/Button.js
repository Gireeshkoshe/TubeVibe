import React from 'react'

const Button = ({name}) => {
  return (
    <div>
  <button className='px-4 py-2 mx-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition duration-200'>{name}</button>
</div>
  )
}

export default Button
