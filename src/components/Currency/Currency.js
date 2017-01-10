import React from "react"
import axios from 'axios'
import jsonp from 'jsonp'
import './currency.css'

export default class Currency extends React.Component{
    constructor(props){
        super(props)
        this.state ={ratio: null, value: null}
        this.Currency =[
        "AUD",
        "BGN" ,
        "BRL",
        "CAD",
        "CHF",
        "CNY",
        "CZK",
        "DKK",
        "GBP",
        "HKD",
        "HRK",
        "HUF",
        "IDR",
        "ILS",
        "INR",
        "JPY",
        "KRW",
        "MXN",
        "MYR",
        "NOK",
        "NZD",
        "PHP",
        "PLN",
        "RON",
        "RUB",
        "SEK",
        "SGD",
        "THB",
        "TRY",
        "USD",
        "ZAR"]
        this.fetch=this.fetch.bind(this);
        
    }

    fetch(){
        const fromCur = this.fromCur.value;
        const toCur = this.toCur.value;
        const number = +this.number.value;
        console.log("cur..."+fromCur)
       jsonp(`http://api.fixer.io/latest?base=${fromCur}`, null, (err,data) => {
        if (err) {
            console.error(err.message);
        } else {
            var ratio = data.rates[toCur]
           var value=  ratio * number;
           this.setState({ value ,ratio})
            console.log(this.state.value);
        }
    });
}
    render(){
        return(
            <div className="main">
                <label>Currency convertor</label>
                <div className="getinput">
                    <p  className ="col-xs-2">from</p>
                    <select className="form-control" className ="col-xs-4" ref={node=>this.fromCur = node}>
                        {
                            this.Currency.map((element,index)=>{
                            return <option key={index}>{element}</option>
                            })
                        }
                    </select>
                    <p  className ="col-xs-1">to</p>
                    <select className="form-control" className ="col-xs-4" ref={node=>this.toCur = node}>
                        {
                            this.Currency.map((element,index)=>{
                            return <option key={index}>{element}</option>
                            })
                        }
                    </select>
                    <br/>
                    <br/>
                    <input className="form-control" ref={node=>this.number = node}  placeholder="enter amount"/><br/>
                    <button onClick={this.fetch} className="btn btn-primary">Convert!</button>                   
                </div>  
                <br/>   
                <div className="ratio">
                <h2>Ratio : {this.state.ratio}</h2>

                </div>
                <br/>   
                <div className="Converted">
                <h2>Converted : {this.state.value}</h2>

                </div>
                
            </div>
            
        )
    }
}