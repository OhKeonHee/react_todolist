import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todo, onIsDone, onDelete, onIsImportant}) => {
  return (
    <div className='TodoList'>
      <div className='search'>
        <input type='text' placeholder='검색어를 입력하세요.' />
      </div>
      <div className='list'>
        {todo.map((it) => (
          <TodoItem key={it.id} {...it} onIsDone={onIsDone} onDelete={onDelete} onIsImportant={onIsImportant}/>
        ))}
      </div>
    </div>
  )
}

export default TodoList
