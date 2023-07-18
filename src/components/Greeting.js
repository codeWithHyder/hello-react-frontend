import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from '../redux/actions';

const Greeting = ({ randomGreeting, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  console.log(randomGreeting);

  return (
    <div>
      <h1>Random Greeting</h1>
      {randomGreeting && <p>{randomGreeting}</p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    randomGreeting: state.randomGreeting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRandomGreeting: () => dispatch(fetchRandomGreeting()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
