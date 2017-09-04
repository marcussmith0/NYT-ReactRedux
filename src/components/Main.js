import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import Search from './Search';
import Results from './Results';

class Main extends Component {

  renderResults() {
    if(!this.props.articles) {
      return <div></div>
    } else {
      return <Results />
    }
  }

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

        <div className='row'>
          {this.renderResults()}
        </div>
     </div>
     
    );
  }
}

function mapStateToProps(state) {
  return { articles: state.articles }
}

export default connect(mapStateToProps)(Main);


