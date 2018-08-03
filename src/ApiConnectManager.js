import React from 'react';
import queryDetector from './DetectorsApi'

const IP_PATTERN = /^(\d{1,3}\.){3}\d{1,3}(:\d+)?$/


class ApiConnectManager extends React.Component {

    constructor() {
        super();
        this.connect = this.connect.bind(this);
    }

    connect(event) {
        event.preventDefault();
        var ipAddress = this.props.data;
        if (IP_PATTERN.test(ipAddress)) {
            this.props
                .apiCall(ipAddress)
                .then(
                    response => { this.props.onSuccess(response.data); },
                    error => { this.props.onError(error); }
                )
                .catch(error => console.log(error));
        } else {
            this.props.onError({reason: "IP address " + ipAddress + " is malformed"});
        }
    }

    render() {
        return (
            <button type="button" className="btn" onClick={ this.connect }>
                <span className="glyphicon glyphicon-circle-arrow-right"
                      aria-hidden="true"></span>
            </button>
        );
    }
}

export default ApiConnectManager;
