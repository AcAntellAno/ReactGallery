import React, { Component } from 'react';
import List from './List';
import Title from './Title';

class Main extends Component {
  render() {
    return (
      <div>
        <Title title={'Todo List 2'} />
        <List tasks={['Mow the lawn', 'Do homework']} />
        <List tasks={['Hose the driveway', 'Finish laundry']} />
      </div>
    );
  }
}

export default Main;
