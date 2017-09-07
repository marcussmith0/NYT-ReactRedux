import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import Search from './Search';
import Results from './Results';

class Main extends Component {

  renderResults() {
    const { articles } = this.props
    if(Object.keys(articles).length) {
      return <Results/>
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
            <div className="text-center">
                <h2 className="make-vis bg-size">NYT News Searcher</h2>
                <hr/>
                <h3 className="make-vis"><i>Where news searching happens</i></h3>
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
            {this.renderResults()}
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


