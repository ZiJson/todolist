import './styles.css';
import './App.css';
import React, { useState } from 'react';

import HEADER from './containers/HEADER';
import SECTION from './containers/SECTION';
import FOOTER from './containers/FOOTER';
var i = 0;
function App() {
  const [ toDoList, setToDoList ] = useState([]);
  const [ TemptoDoList, setTempToDoList ] = useState([]);
  const [ userInput, setUserInput ] = useState('');
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
    setTempToDoList(mapped);
    console.log(TemptoDoList)
  };
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  };
  
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: (i) + 1, task: userInput, complete: false }];
    setToDoList(copy);
    setTempToDoList(copy);
    i += 1;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  }
  const deleteSingle = (id) => {
    let mapped = toDoList.filter(todo=>(
      todo.id !== Number(id)
    ))
    setToDoList(mapped);
    setTempToDoList(mapped);
  }
  const setFilter = (e) => {
    if(e==='active'){
      setTempToDoList(toDoList.filter(todo=>(todo.complete===false))) 
    }
    else if(e==='completed'){
      setTempToDoList(toDoList.filter(todo=>(todo.complete===true)))
    }
    else {
      setTempToDoList(toDoList)
    }
  }
  
  const filterCompleted = () => {
    let mapped = toDoList.filter(task => task.complete===false);
    setToDoList(mapped);
    setTempToDoList(mapped);
    
  }
  
  return (
    <div id="root" class="todo-app__root">
      <HEADER/>
      <SECTION toDoList={TemptoDoList} userInput={userInput} handleToggle={handleToggle} handleChange={handleChange} handleSubmit={handleSubmit} deleteSingle={deleteSingle}/>
      <FOOTER toDoList={TemptoDoList} setFilter={setFilter} Nums={toDoList} filterCompleted={filterCompleted}/>
    </div>
  );
}

export default App;
