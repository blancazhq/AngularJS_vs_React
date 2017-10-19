import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      myTodos: []
    }
  }

  componentDidMount() {
    this.setState({
      myTodos: [
        {name: "brushing my teeth", done: false},
        {name: "brushing my hair", done: true},
        {name: "taking a shower", done: false}
      ]
    })
  }

  checkOffItem(idx) {
    var myTodos = this.state.myTodos;
    myTodos[idx].done = !myTodos[idx].done;
    this.setState({
      myTodos: myTodos
    })
  }

  addItem(value) {
    var myTodos = this.state.myTodos;
    myTodos.push({name: value, done: false});
    this.setState({
      myTodos: myTodos
    })
  }

  render() {
    return (
      <div className="my-todo-list-container">
        <h1 className="my-todo-list-title">MY TODO LIST</h1>
        <InputBox onAddItem={(item) => this.addItem(item)}></InputBox>
        {this.state.myTodos.map((myTodo, idx) => <TodoListItem
          key={idx}
          itemName={myTodo.name}
          itemIsDone={myTodo.done}
          onCheckOffItem={() => this.checkOffItem(idx)}
        ></TodoListItem>)}
    </div>  
    );
  }
}

class TodoListItem extends Component {
  render() {
    return (
      <div className="todo-list-item-container">
      <span 
        className={this.props.itemIsDone ? 'todo-list-item todo-list-item-done': 'todo-list-item'}
      >
        {this.props.itemName}
      </span>
      <button 
        className={this.props.itemIsDone ? 'button button-disabled' : 'button'}
        onClick={this.props.onCheckOffItem}
      >
        Done
      </button>
    </div> 
    );
  }
}

class InputBox extends Component {
  constructor() {
    super();
    this.state={
      value: ''
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  onAddItem(value) {
    this.props.onAddItem(value);
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <div className="input-container">
      <input className="input" 
       value={this.state.value}
       onChange={(event) => this.handleChange(event)}
      />
      <button className="button" 
       onClick={() => this.onAddItem(this.state.value)}>
        Add
      </button>
    </div> 
    );
  }
}

export default App;
