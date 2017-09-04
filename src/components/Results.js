import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveArticle } from '../utils/utils';

class Results extends Component {

    onSave(id) {
        const { articles } = this.props;
        this.props.saveArticle(articles[id])
    }

    renderList() {
        return _.map(this.props.articles, (article) => {
            return (
                <li className="list-group-item" key={article._id}>
                    <a href={article.web_url} target="_blank">
                        <p>{article.abstract}</p>
                    </a>
                    
                    <button onClick={(id) => this.onSave(article._id)} className="btn btn-success">
                        Save
                    </button>
            
                </li>
            )
        })
    }
    
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel panel-header text-center">Results</div>

                <div className="panel panel-body">
                    {console.log(this.props.articles)}
                    <ul className='list-group'>
                        {this.renderList()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { articles: state.articles }
}

export default connect(mapStateToProps, { saveArticle })(Results);