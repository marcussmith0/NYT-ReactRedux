import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Search extends Component {


    render() {
        return (
            <div className="panel panel-default text-center">
                <div className="panel panel-header">Search</div>

                <div className="panel panel-body">
                    <form className="form-group">
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
                    </form>
                </div>
            </div>
        )
    }
}

export default Search;