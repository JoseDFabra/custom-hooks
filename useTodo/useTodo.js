import { useEffect, useReducer} from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = ()=>{
  return JSON.parse( localStorage.getItem('todos') || [] );
}

export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  

  const handleNewTodo = (todo) =>{
    const action = {
      type: 'Add Todo',
      payload: todo,
    }
    dispatch(action);
  }
  const handleDeleteTodo = (todo) =>{
    const action = {
      type: 'Remove Todo',
      payload: todo,
    }
    dispatch(action);
  }
  const onToggleTodo = (todo) =>{
    console.log(todo);
    const action = {
      type: 'Toggle Todo',
      payload: todo,
    }
    dispatch(action);
  }
  const todosCount = todos.length;
  const pendingTodosCount = todos.filter(todo => !todo.done).length




  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
    pendingTodosCount,
    todosCount


  };
};
