import React from 'react';
import './box.css';

export default class Box extends React.Component{
  constructor(props){
    super(props);
    this.state = {r: 0, g: 0, b: 0, a: 0};
  }

  componentDidMount(){
    setInterval(_ => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const a = Math.random();
      this.setState({r, g, b, a});
    }, 500);
  }

  render(){
    const str = `rgba(${this.state.r}, ${this.state.g}, ${this.state.b}, ${this.state.a})`;
    return <div style={{backgroundColor: str}} className="box"></div>;
  }
};