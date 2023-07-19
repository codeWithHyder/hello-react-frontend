// Greeting.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRandomGreeting } from '../redux/actions';

const Greeting = ({ randomGreeting, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div>
      <h1>Random Greeting</h1>
      {randomGreeting && <p>{randomGreeting}</p>}
    </div>
  );
};

Greeting.propTypes = {
  randomGreeting: PropTypes.string,
  fetchRandomGreeting: PropTypes.func.isRequired,
};

Greeting.defaultProps = {
  randomGreeting: '',
};

const mapStateToProps = (state) => ({
  randomGreeting: state.randomGreeting,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRandomGreeting: () => dispatch(fetchRandomGreeting()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
