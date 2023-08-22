import React from 'react'
import { useState } from 'react'

const SideBar = ({ onIsImportantView }) => {
  const [isImportant, setIsImportant] = useState(false)
  const checkImportantView = () => {
    setIsImportant(!isImportant)
    onIsImportantView(isImportant)
  }
  return (
    <div className='SideBar'>
      <div className='important'>
        <label>중요</label>
        <input type='checkbox' onChange={checkImportantView} isImportant={isImportant} />
      </div>
      <div className='complete'>
        <label>완료</label>
        <input type='checkbox'/>
      </div>
    </div>
  )
}

export default SideBar
