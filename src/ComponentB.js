import React, { Component } from 'react';
import emitter from './events';

export default class ComponentB extends Component {
  render() {
    const cb = (data) => {
      let i = 0;
      return () => {
        i++;
        emitter.emit('callMe', data + ` [${i}]`)
      }
    };

    return (
      <div>
        <button onClick={cb('World') }>点击</button>
      </div>
    );
  }
}
