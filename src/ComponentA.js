import React, { Component } from 'react';
import emitter from './events';

export default class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'React',
    };
  }

  componentDidMount() {
    this.eventEmitter = emitter.addListener('callMe', (data) => {
      this.setState({
        data
      })
    });
  }

  componentWillUnmount() {
    emitter.removeListener(this.eventEmitter);
  }

  render() {
    return(
      <div>
        Hello, { this.state.data }
      </div>
    );
  }
}
