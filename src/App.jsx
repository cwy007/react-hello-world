import React, { Component } from 'react';
import PropTypes from 'prop-types';       // 定义组件属性类型检查
import ListItems from './ListItems.js';
import Header from './Header.js';
import './index.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: '',
      items: ['吃苹果', '吃香蕉', '喝奶茶']
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      todoItem: '',
      items: [
        ...this.state.items,
        this.state.todoItem
      ]
    });
  }

  onChange(event) {
    this.setState({
      todoItem: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <Header title="TodoList" />
        <form className="form-wrap" onSubmit={this.onSubmit}>
          <input value={this.state.todoItem} onChange={this.onChange} />
          <button>Submit</button>
        </form>

        <ListItems items={this.state.items} />
      </div>
    );
  }
}

App.propTypes = {
  items: PropTypes.array,
  todoItem: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}
