import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex overflow-x-auto w-screen py-2 bg-gray-50 '>
    <Button name="All"/>
    <Button name="Gaming"/>
    <Button name="Songs"/>
    <Button name="Live"/>
    <Button name="Soccer"/>
    <Button name="News"/>
    <Button name="Cricket"/>
    <Button name="Cooking"/>
    <Button name="All"/>
      
   
  </div>
  
  )
}

export default ButtonList
