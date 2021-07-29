import { useState, useEffect } from 'react';

import './App.scss';
import Header from './components/Header';
import ListItem from './components/ListItem';
import ListOfAllItems from './components/ListOfAllItems'


function App() {

  const retrievedFromLocalStorage = localStorage.getItem("MemoListItems")

  const [list, setList] = useState(JSON.parse(retrievedFromLocalStorage) || [])

  const addToList =(value)=>{

    const newMemo = {id: new Date().getTime(),
                    text: value, 
                    edit: false,
                    completed: false
                  };
    setList([...list].concat(newMemo))
  } 

  useEffect(()=> {
    localStorage.setItem('MemoListItems', JSON.stringify(list))
  },[list])

// #####  edit a memo item
  const editItem = (id) =>{
      const newList = list.map(item =>{
        if(item.id === id ) {
          return {...item, edit: true}
        } else {return item}
      })
      setList(newList)
  }

const doneEditItem = (editedMemo, id) => {
    const newList = list.map(item =>{
      if(item.id === id ) {
        return {...item, text: editedMemo, edit: false}
      } else {return item}
    })
    setList(newList)
}

// #####  line through a memo item

const completeItem = (id) => {
  const newList = list.map(item =>{
    if(item.id === id ) {
      return {...item, completed: !item.completed}
    } else {return item}
  })
  setList(newList)
}

// ##### delete a memo item
 const deleteItem = (id) =>{
  const newList = list.filter((item) => {
    return item.id !== id})
  setList(newList)
}

  return (
    <div className="App">
      <Header/>
    
      <ListItem toList={ (i) => addToList(i)}/>
      
      <ListOfAllItems list={list}  edItem={(id) => editItem(id)} doItem={(editedMemo, id) => doneEditItem(editedMemo, id)} complItem={(id)=> completeItem(id)} delItem={(del) => deleteItem(del)}/>
    </div>
  );
}

export default App;
