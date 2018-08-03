import React from 'react';

function AlertBox({ show, error }) {
    if (show) {
        var errCodeMsg;
        if (error.code) {
            errCodeMsg = <b>Response Error: {error.code}</b>;
        }
        return (
            <div className="col-md-10 alert alert-danger">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>&nbsp;
                {errCodeMsg}&nbsp;&nbsp;{error.reason}
            </div>
        );
    } else {
        return null;
    }
}

export default AlertBox;
