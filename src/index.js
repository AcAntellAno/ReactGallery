import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trash', 'Wash car', 'change oil'];

class List extends Component {
  render() {
    return (
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    );
  }
}

class Title extends Component {
  render() {
    return (
      <div>
        <h1>Task List</h1>
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Title /> <List /> <List /> <List />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
