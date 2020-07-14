import React, { Component } from 'react';
import ComponentA from "./ComponentA";
import ComponentB from './ComponentB';

export default class App extends Component {
  render() {
    return(
      <div>
        <ComponentA />
        <ComponentB />
      </div>
    );
  }
}