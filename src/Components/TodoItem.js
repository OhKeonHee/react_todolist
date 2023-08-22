import React from 'react'

const TodoItem = ({ id, content, isDone, isImportant, writeDate, onIsDone, onDelete, onIsImportant }) => {
  const onCheckedCheckbox = () => {
    onIsDone(id)
  }
  const onClickDelete = () => {
    onDelete(id)
  }
  const onCheckedImportant = () => {
    onIsImportant(id)
  }
  return (
    <div className='TodoItem'>
      <div>
        <input type='checkbox' checked={isDone} onChange={onCheckedCheckbox} />
      </div>
      <div style={{width: '40%', marginLeft:'50px'}}>
        <h3>{content}</h3>
      </div>
      <div>
        {isImportant == true ? 
          <button className='checkImportant' onClick={onCheckedImportant}>🔴</button> : 
          <button className='checkNotImportant' onClick={onCheckedImportant}>⚪</button> }
      </div>
      <div>
        {writeDate}
      </div>
      <div>
        <button className='remove' onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  )
}

export default TodoItem
