import React from 'react';
import Entry from './Entry.jsx';
import Tally from './Tally.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h2>Hello User. Have you been rejected today? </h2>
        <Entry/>
        <Tally/>
      </div>);
  }
}
