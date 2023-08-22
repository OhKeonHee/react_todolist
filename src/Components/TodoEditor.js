import React, { useState, useRef } from 'react'

const TodoEditor = ({ onCreate, isImportant }) => {
  const [content, setContent] = useState('')
  const inputRef = useRef();
  const onChangeValue = (e) => {
    setContent(e.target.value);
  }
  const onEnter = (e) => {
    if(e.keyCode === 13) {
      onSubmit();
    }
  }
  const onSubmit = () => {
    if(!content) {
      alert('할 일을 작성해주세요.')
      inputRef.current.focus();
    }
    onCreate(content);
    setContent("")
  }
  return (
    <div className='TodoEditor'>
      <h2>할 일 작성하기 📌</h2>
      <div style={{display:'flex'}}>
        <input ref={inputRef} type='text' placeholder='할 일 작성하기' value={content} onChange={onChangeValue} onKeyDown={onEnter} />
        <button onClick={onSubmit}>작성</button>
      </div>
    </div>
  )
}

export default TodoEditor
