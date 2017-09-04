import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';
import Results from './Results';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
            <div className="text-center">
                <h1>NYT News Searcher</h1>
                <hr/>
                <h3><i>Where news searching happens</i></h3>
            </div>
            <Link to="/search"><span className="float-right btn btn-primary">Search</span></Link>
            &nbsp;
            <Link to="/saved"><span className="float-right btn btn-success">Saved</span></Link>

        </div>
        <div className="row">

          <Search />
        </div>

        <div className="row">
          <Results />
        </div>
     </div>
     
    );
  }
}

export default Main;


