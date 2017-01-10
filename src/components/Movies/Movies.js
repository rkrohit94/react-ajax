import React from "react"
import axios from 'axios'
import PouchDB from 'pouchdb'


export default class Movies extends React.Component{
    constructor(props){
        super(props)
        this.state ={results : [],movies : []}
        this.db = PouchDB("movies")
        this.search=this.search.bind(this);
        this.clear =this.clear.bind(this);
        this.add =this.add.bind(this);
    }
    search(){
        const query = this.query.value;
        const url =`http://www.omdbapi.com/?s=${query}&page=1`
        axios.get(url)
        .then(rsp => {
            const results = rsp.data.Search;
            this.setState({results})
            console.log(rsp.data.Search)
        })
        
    }

    add(event){
        const title = event.target.parentNode.parentElement.querySelector('.title').textContent
        const year = event.target.parentNode.parentElement.querySelector('.title').textContent
        const poster = event.target.parentNode.parentNode.querySelector('.poster').getAttribute("src")
        this.db.put({
            _id: title,
            year,
            poster
        }).then(rsp=>{
            console.log("rsp",rsp)
        }).catch(err =>{
            console.log(err)
        })
    }
    componentDidMount(){
        this.db.allDocs({
            include_docs: true,
            attchachments: true
        }).then(rsp=>{
            const movies = rsp.rows;
            this.setState({movies})
            console.log("get  =>",rsp)
        }).catch(err =>{
            console.log(err)
        })
    }
    clear(){
        this.setState({results : []})
    }

    render(){
        return(
                <div className="panel panel-default">
                    <div className="panel-body">
                    <h1>Movies</h1>
                    <input ref={node=>this.query = node}   />
                    <button onClick={this.search}  className="btn btn-primary">Search</button>
                    <button  onClick={this.clear} className="btn btn-danger">Clear</button>
                    <div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Add</th>
                                    <th>Title</th>
                                    <th>Year</th>
                                    <th>Poster</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   this.state.results.map((r,i)=>{
                                       return(
                                           <tr key={i}>
                                                <td><button onClick={this.add} className="btn btn-success btn-xs">Add</button></td>
                                                <td className ="title">{r.Title}</td>
                                                <td className ="year">{r.Year}</td>
                                                <td ><img className ="poster" src={r.Poster} /></td>

                                           </tr>
                                       )
                                   }) 
                                }
                            </tbody>
                        </table>
                        <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Year</th>
                                        <th>Poster</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    this.state.movies.map((r,i)=>{
                                        console.log('r ',r)
                                        return(
                                            
                                            <tr key={i}>
                                                    <td >{r.doc._id}</td>
                                                    <td >{r.doc.year}</td>
                                                    <td ><img  src={r.doc.poster} /></td>

                                            </tr>
                                        )
                                    }) 
                                    }
                                </tbody>
                            </table>
                    </div>
                    
                  </div>
                </div>              
            
        )
    }
}