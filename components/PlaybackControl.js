import React, { Component, PropTypes } from 'react';

export default class PlaybackControl extends Component {

  render() {
    var style = {
      marginTop: '5%',
      padding: '5px',
      width: '80%',
      border: 'solid 1px black'
    };
    const { item, buttonClick } = this.props;

    return (
        <div style={style}>
          <p>
            {item.name}
          </p>
          <input type="button" value="text"
            onClick={buttonClick}/>
        </div>
    );
  }
}

PlaybackControl.propTypes = {
  item: PropTypes.object.isRequired,
  buttonClick: PropTypes.func.isRequired
};
