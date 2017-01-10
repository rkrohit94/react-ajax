import React from "react"
import axios from 'axios'
import "./random.css"

export default class Random extends React.Component{
    constructor(props){
        super(props)
        this.state ={data : []}
        this.fetch=this.fetch.bind(this);
    }
    fetch(){
        const num = +this.number.value;
        axios.get(`https://qrng.anu.edu.au/API/jsonI.php?length=${num}&type=uint16`)
        .then((response) => {
            const data = response.data.data;
            this.setState({data})
            console.log(this.state.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render(){
        return(
            <div>
                <h1>Random</h1>
                <div className="getInput">
                    <input ref={node=>this.number = node} className="form-control" type="number" /><br/>
                    <button onClick={this.fetch} className="btn btn-primary">Go!</button>
                </div>              
                <div className="listInput">
                <ul>
                    {
                    this.state.data.map((element,index)=><li key={index}>{element}</li>)
                    }
                </ul>
                </div>
            </div>
            
        )
    }
}