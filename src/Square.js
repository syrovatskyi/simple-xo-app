import React, { Component } from 'react';
import './Square.js';
import './Game.js';

class Square extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }
  

  render() {
    return (
      <button 
        className="square" 
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}