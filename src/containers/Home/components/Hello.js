import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import './a.css';


export default class Hello extends React.Component {
  state = {
    count: 1,
  }

  addCount = () => {
    this.setState({
      count: this.state.count += 1,
    });
  }

  lessCount = () => {
    this.setState({
      count: this.state.count -= 1,
    });
  }


  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.addCount}>+</button>
        <button onClick={this.lessCount}>-</button>
        <Button color="danger">danger</Button>
      </div>
    );
  }
}
