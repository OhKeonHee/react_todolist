import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <div className='Header'>
      <div>
        <h1>📅 {new Date().toLocaleDateString()}</h1>
      </div>
      <div>
        <h1>📚 완료하지 못한 일 : 3</h1>
      </div>
    </div>
  )
}

export default Header
