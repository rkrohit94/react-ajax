import React from 'react'
import {Link, browserHistory} from 'react-router'

export default () => {
    return(
        <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <a className="navbar-brand" href="#">React Rocks</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav" />
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/faq">Faq</Link></li>
        <li><Link to="/boxes">Boxes</Link></li>
      </ul>
    </div>
  </div>
</nav>          
    )
}