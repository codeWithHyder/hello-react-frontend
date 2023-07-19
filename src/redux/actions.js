const API_URL = 'http://localhost:3000';

export const FETCH_RANDOM_GREETING_SUCCESS = 'FETCH_RANDOM_GREETING_SUCCESS';

export const fetchRandomGreetingSuccess = (greeting) => ({
  type: FETCH_RANDOM_GREETING_SUCCESS,
  payload: greeting,
});

export const fetchRandomGreeting = () => (dispatch) => {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      dispatch(fetchRandomGreetingSuccess(data.greeting));
    });
  // .catch((error) => {
  // //   console.error('Error fetching random greeting:', error);
  // });
};
