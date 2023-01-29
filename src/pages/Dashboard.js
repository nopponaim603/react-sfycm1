import React, { Component } from 'react';
import Navbar from './Components/Navbar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ls = [2, 2, 2, 2, 34, 23, , 23, 2, 3, 23, 2, 32, 3];
    return (
      <div>
        <Navbar />
        <h2>Dashboard</h2>
      </div>
    );
  }
}

const Jd = (props) => (
  <div>
    <p>{props.name} kmkk</p>
  </div>
);

export default Dashboard;
