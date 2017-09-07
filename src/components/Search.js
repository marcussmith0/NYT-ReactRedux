import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { fetchArticles } from '../actions/index';

class Search extends Component {

    renderField(field) {
        const { meta: { touched, error }} = field
        const className = `form-group ${touched && error ? 'has-error':''}`

        return (
            <div className={className}>
                <div className="col-md-8 col-md-offset-2">
                    <label>{field.label}</label>
                    <input
                        className="form-control"
                        type='text'
                        {...field.input}
                    />
                <div className="text-danger">
                    {touched ? error: ""}
                </div>
                </div>
            </div>
        )
    }

    onSubmit (values) {
        this.props.fetchArticles(values);
        
    }

    render() {
        const { handleSubmit } = this.props;
    
        return (
            <div className="panel panel-default text-center">
                <div className="panel panel-heading"><h3>Search</h3></div>

                <div className="panel panel-body">
                    <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                            label="Topic"
                            name='topic'
                            component={this.renderField}
                        />

                        <Field
                            label="Start Year"
                            name='startYear'
                            component={this.renderField}
                        />

                        <Field
                            label="End Year"
                            name='endYear'
                            component={this.renderField}
                        />

                        <button className="btn btn-primary">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}


function validate(values) {
    const errors = {};

    if(!values.topic) {
        errors.topic = "Please enter topic";
    }

    if(!values.startYear) {
        errors.startYear = "Please enter start year";
    }

    if(!values.endYear) {
        errors.endYear = "Please enter end year";
    }

    return errors;
}


export default reduxForm({
    validate: validate,
    form: "searchForm"
})(
    connect(null, { fetchArticles })(Search)
);