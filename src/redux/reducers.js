const initialState = {
  randomGreeting: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RANDOM_GREETING_SUCCESS':
      return {
        ...state,
        randomGreeting: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
