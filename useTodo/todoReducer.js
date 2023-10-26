

export const todoReducer = (initialState = [], action) => {

  switch (action.type) {
    case 'Add Todo':
      return [...initialState, action.payload ]

    case 'Remove Todo':
      return initialState.filter(todo => todo !== action.payload)

    case 'Toggle Todo':
      return initialState.map(todo => {

        if(todo === action.payload) {
          return{
            ...todo,
            done: !todo.done
          }
        }
        return todo;
      })
  
    default:
      return initialState;
  }


};
