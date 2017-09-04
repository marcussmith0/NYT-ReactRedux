import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchSaved } from '../actions/index';

class Saved extends Component {
    componentDidMount() {
        this.props.fetchSaved();
    }

    renderSaved() {
        console.log("this is the articles", this.props.saved);
        return _.map(this.props.saved, (article) => {
            return (
                <li className="list-group-item" key={article._id}>
                    <a href={article.url} target="_blank">
                        <p>{article.title}</p>
                    </a>
                        
                    <button className="btn btn-danger">
                        Delete
                    </button>
                </li>
            )
        });
    }

    render(){
        return (
            <div className="panel panel-default">
                <div className="panel panel-header text-center">
                    <Link to='/' className="btn btn-primary">Home</Link> &nbsp;
                    Saved
                </div>

                <div className="panel panel-body">
                    <ul className='list-group'>
                        {this.renderSaved()}
                    </ul>
                </div>
            </div>
        )     
    }
}

function mapStateToProps(state) {
    return { saved: state.saved }
}

export default connect(mapStateToProps, { fetchSaved })(Saved);