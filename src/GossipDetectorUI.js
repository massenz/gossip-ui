import React from 'react';

import AlertBox from './AlertBox'
import ApiConnectManager from './ApiConnectManager'
import queryDetector from './DetectorsApi'
import Report from './Report'


const IP_PATTERN = /(\d{1,3}\.){3}\d{1,3}/

function IpInputBox({ text, onTextChange }) {
    function handleChange(event) {
        onTextChange(event.target.value);
    }

    return (
        <input type="text"
            className="form-control"
            placeholder="Enter a valid IP address"
            onChange={handleChange}
            describedby="serverIp"
            id="editor" />
    );
}

class GossipDetector extends React.Component {

    constructor() {
        super();
        this.state = {
            text: '',
            report: {},
            hasError: false,
            error: null
        };
        // Javascript stupidity: need to ensure the `this` really means `this`. Really.
        this.handleTextChange = this.handleTextChange.bind(this);
        this.setResponse = this.setResponse.bind(this);
        this.setError = this.setError.bind(this);

    }

    setResponse(data) {
        this.setState(() => ({
            report: data,
            hasError: false
        }));
    }

    setError(error) {
        if (error.reason) {
            console.error("API Call returned an error: " + error.reason);
        } else {
            console.error("Failure: " + error);
            error = {reason: error};
        }

        this.setState(() => ({
            hasError: true,
            error: error,
            report: {}
        }));
    }

    render() {
        const {text} = this.state;
        const {report} =  this.state;

        return (
            <div>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="input-group">
                            <span className="input-group-addon" id="serverIp">Server IP:</span>
                            <IpInputBox onTextChange={this.handleTextChange} text={text} />
                            <span className="input-group-btn">
                                <ApiConnectManager
                                    apiCall={queryDetector}
                                    onSuccess={this.setResponse}
                                    onError={this.setError}
                                    data={text} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">&nbsp;</div>
                <div className="row">
                    <AlertBox show={this.state.hasError} error={this.state.error} />
                </div>
                <div className="row">
                    <Report report={report} />
                </div>
            </div>
        );
    }

    handleTextChange(currentText) {
        this.setState(() => ({
            text: currentText,
            hasError: false
        }));
    }
}

export default GossipDetector;
