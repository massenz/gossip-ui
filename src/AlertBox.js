import React from 'react';

function AlertBox({ show, error }) {
    if (show) {
        var errCodeMsg;
        // Force convert error message to string.
        // Prevents the "Objects are not valid as a React child" error.
        var errMsg = "" + error.reason;
        if (error.code) {
            errCodeMsg = <b>({error.code})</b>;
        }
        return (
            <div className="col-md-6 col-xs-12 alert alert-danger">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true">
                </span>
                &nbsp;&nbsp;{errMsg}&nbsp;&nbsp;{errCodeMsg}
            </div>
        );
    } else {
        return null;
    }
}

export default AlertBox;
