import React from 'react';
import Box from './Box';

export default class Boxes extends React.Component{
  constructor(props){
    super(props);
    this.state = {boxes: 0};
    this.setBoxes = this.setBoxes.bind(this);
  }

  setBoxes(event){
    const boxes = +event.target.value;
    this.setState({boxes});
  }

  render(){
    return (
      <div>
        <h1>Boxes</h1>
        <input type="number" onChange={this.setBoxes} />
        <div />
        {
          Array(this.state.boxes).fill(null).map((_, i) => <Box key={i} />)
        }
      </div>
    );
  }
}