import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

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
            <Link to="/saved"><span className="float-right btn btn-success">View Saved</span></Link>

        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <Search />
          </div>
        </div>

        <div className='row'>
          <div className="col-md-6 col-md-offset-3">
            <Results/>
          </div>
        </div>
     </div>
    );
  }
}

function mapStateToProps(state) {
  return { articles: state.articles }
}

export default connect(mapStateToProps)(Main);


