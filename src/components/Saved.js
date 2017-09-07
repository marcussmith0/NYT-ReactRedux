import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchSaved, deleteSaved } from '../actions/index';

class Saved extends Component {
    componentDidMount() {
        this.props.fetchSaved();
    }

    deleteArticle(id) {
        this.props.deleteSaved(id);
    }

    renderSaved() {
        return _.map(this.props.saved, (article) => {
            return (
                <li className="list-group-item" key={article._id}>
                    <a href={article.url} target="_blank">
                        <p>{article.title}</p>
                    </a>
                        
                    <button onClick={(id) => this.deleteArticle(article._id)} className="btn btn-danger">
                        Delete
                    </button>
                </li>
            )
        });
    }

    check() {
        const { saved } = this.props;
        if(Object.keys(saved).length === 0) {
            return <h3 className="text-center">There are no saved articles</h3>
        }
    }

    render(){
        return (
            <div className="panel panel-default">
                <div className="panel panel-heading text-center">
                    <Link to='/' className="btn btn-primary pull-left">Home</Link> &nbsp;
                    <h3>Saved</h3>
                </div>

                <div className="panel panel-body">
                    <ul className='list-group'>
                        {this.renderSaved()}
                        {this.check()}
                    </ul>
                </div>
            </div>
        )     
    }
}

function mapStateToProps(state) {
    return { saved: state.saved }
}

export default connect(mapStateToProps, { fetchSaved, deleteSaved })(Saved);