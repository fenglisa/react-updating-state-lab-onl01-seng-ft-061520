import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  constructor() {
    super();

    // Define the initial state:
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrate= () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleResolution= () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleBitrate} className='bitrate'>Adjust Bitrate</button>
        <button onClick={this.handleResolution} className='resolution'>Adjust Resolution</button>
      </div>
    );
  }
}
