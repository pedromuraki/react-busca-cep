const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat({
        content: action.content,
        status: 'to-do'
      });

    case 'REMOVE_ITEM':
      return state.filter((_, i) => i !== action.index);

    case 'CHECK_ITEM':
      return state.map((item, i) => i === action.index ? { ...item, status: 'is-done' } : item);

    case 'UNCHECK_ITEM':
      return state.map((item, i) => i === action.index ? { ...item, status: 'to-do' } : item);
  }
  return state;
}

export default todos;
