import React, { Component, PropTypes } from 'react';

export default class Progress extends Component {
  render() {
    return (
      <p style={{ display: "inline",
       marginLeft: "5px"}}>
        {this.props.progress}
      </p>
    );
  }
}

Progress.propTypes = {
  progress: PropTypes.string.isRequired
};

Progress.defaultProps = {
  progress: "0%"
}
