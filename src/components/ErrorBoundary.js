import React, { Component } from 'react';
import { connect } from 'react-redux';
import { throwError } from '../store/actions';

class ErrorBoundary extends Component {

  componentDidCatch(error, info) {
    this.props.throwError();
    console.log(error, info);
  }

  render() {
    if (this.props.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
    throwError: () => dispatch(throwError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
