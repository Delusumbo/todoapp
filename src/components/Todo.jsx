import React, {useState} from 'react'
import TodoForm from './TodoForm'
// import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Todo(updateTodo) {

  const[edit, setEdit] = useState({
    id: null,
    value: ''
  });


  const submitUpdate = value =>{
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    });
  };

  if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }
   
    
    return(           
                  <TiEdit className='edit-icon' />    
   
    )
}

    

  export default Todo;
