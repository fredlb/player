import React, { Component, PropTypes } from 'react';
import Progress from './Progress';
import AudioPlayer from './AudioPlayer.js';

export default class Player extends Component {
  render() {
    var style = {
      marginTop: '5%',
      padding: '5px',
      width: '80%',
      border: 'solid 1px black'
    };
    return (
      <div style={style}>
        <p>
          SomeFileName
        </p>
        <input type="button" value="Play">
        </input>
        <p style={{ display: "inline",
         marginLeft: "5px"}}>
          00:00
        </p>
        <Progress progress={"13%"}/>
        <AudioPlayer source={"http://traffic.libsyn.com/comedybutton/ComedyButton_Ep199.mp3"}
          isPlaying = {false}/>
      </div>
    );
  }
}
