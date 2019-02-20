const initialState = false

const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_DONE':
      return 'is-done';

    case 'FILTER_TODO':
      return 'to-do';

    case 'CLEAR_FILTER':
      return false;
  }
  return state;
}

export default filter;
