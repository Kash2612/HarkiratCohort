import { useState } from 'react'
// todo application
// {
//   todos:[{
//     title:"title1",
//     description:"first todo",
//     completed:true/false
//   }]
// }

function App() {
  const [todos, setTodos] = useState([{
    title:"Go to gym",
    description:"Go to gym from 7-9",
    completed: false
  }, {
    title:"Study",
    description:"Study from 9-11",
    completed: true
  }])

  function addTodo(){
    setTodos([...todos,{
      title:"new todo",
      description:"describe this new todo"

    }])
  }

  return (
    
    <div>

      {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
      <Todo title="kashish" description="kashish">
    </Todo> */}

    <button onClick={addTodo}>Add Todo</button>

    {todos.map(function(todo){
      return <Todo title={todo.title} description={todo.description}></Todo>
    })}

    </div>

  )
    
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
