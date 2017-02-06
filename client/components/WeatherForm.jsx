import React, { Component } from 'react';

class WeatherForm extends Component {
    onFormSubmit(event) {
        event.preventDefault();

        const location = this.refs.location.value;

        if(location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <input type="text" ref="location" placeholder="Enter City Name" />
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
};

export default WeatherForm;