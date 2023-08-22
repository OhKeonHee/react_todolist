import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import TodoEditor from "./Components/TodoEditor"
import TodoList from "./Components/TodoList"
import SideBar from './Components/SideBar';
import { useRef, useReducer, useState } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case "CREATE":
      return [action.newItem, ...state]
    case "ISDONE":
      return state.map((it) => (it.id === action.targetId ? {...it, isDone: !it.isDone} : it))
    case "DELETE":
      return state.filter((it) => (it.id !== action.targetId))
    case "ISIMPORTANT":
      return state.map((it) => (it.id === action.targetId ? {...it, isImportant: !it.isImportant} : it))
    case "ISIMPORTANTVIEW":
      return state.filter((it) => it.isImportant == false ? (it.isImportant !== action.isImportant) : 
      {...it, isImportant: null})
    default:
      return state
  }
}

function App() {
  const mockTodo = [
    {
      id: 0,
      content: 'React 공부',
      isDone: false,
      isImportant: false,
      writeDate: new Date().toLocaleDateString
    },
    {
      id: 1,
      content: '데이트',
      isDone: false,
      isImportant: true,
      writeDate: new Date().toLocaleDateString
    },
    {
      id: 2,
      content: '영화보기',
      isDone: false,
      isImportant: false,
      writeDate: new Date().toLocaleDateString
    }
  ]
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE", 
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        isImportant: false,
        writeDate: new Date().toLocaleDateString
      }
    })
    idRef.current += 1;
  }
  const onIsDone = (targetId) => {
    dispatch({
      type: "ISDONE",
      targetId
    })
  }
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId
    })
  }
  const onIsImportant = (targetId) => {
    dispatch({
      type: "ISIMPORTANT",
      targetId
    })
  }
  const onIsImportantView = (isImportant) => {
    dispatch({
      type: "ISIMPORTANTVIEW",
      isImportant
    })
  }



  return (
    <div className="App">
      <SideBar onIsImportantView={onIsImportantView} />
      <div style={{width: '700px'}}>
        <Header />
        <TodoEditor onCreate={onCreate}/>
        <TodoList todo={todo} onIsDone={onIsDone} onDelete={onDelete} onIsImportant={onIsImportant}/>
      </div>
    </div>
  );
}

export default App;
