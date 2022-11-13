import React, {useState} from 'react'
import TodoForm from './TodoForm'
// import Todo from './Todo'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'     

function TodoList() {

    const [todos, setTodos] = useState([]);
    const[edit, setEdit] = useState({
      id: null,
      value: ''
    });

    React.useEffect()

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos);
    // console.log(todo, ...todos);
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr);
  }
  
  const beginUpdate = (todoId, text) => {
    console.log(todoId,text)
    setEdit({
      id: todoId,
      value: text
    })
  } 


  const updateTodo = (todoId, newValue) => {

    console.log(todoId,newValue);
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue :item)))    
  } 


  const submitUpdate = value =>{
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }
  // const completeTodo = id => {
  //   let updatedTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.isComplete = !todo.isComplete
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodos);
    
  // };
  

  return (
    <div>

        <TodoForm onSubmit={addTodo} />
        <div>
            {
              todos.map((todo) => (                
                  <div className=''>
                    <div key={todo.id}>
                      {
                      todo.id === edit.id ? <input type="text" name='' value={edit.value} /> : todo.text
                      }
                    </div>
                    <div className='icons'>
                      <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon delete' title='delete' />
                      <TiEdit className='edit-icon' onClick={() => beginUpdate(todo.id,todo.text)}  />
                      {/* <Todo updateTodo={updateTodo} /> */}
                    </div>
                  </div>                
              ))
            }
        </div>
    </div>
  )
}

export default TodoList;
