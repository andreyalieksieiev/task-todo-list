export default (state, action) => {
  console.log('state: ', state);
  console.log('action: ', action);
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Math.random(),
          time: Date.now(),
          title: action.payload,
          completed: false
        }
      ]
    case 'changed':
      return state.map(el => {
        if (el.id === action.payload) {
          el.completed = !el.completed
        }
        return el
      })
    case 'deleted':
      return state.filter(el => el.id !== action.payload)  
    default:
      return state;
  }
}