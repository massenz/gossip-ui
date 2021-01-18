import React from 'react';
import ServersTable from './ServersTable';

function Report({report}) {

    if (! report.sender) {
        return null;
    }
    return (
        <span>
        <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><b>Server</b>&nbsp;&nbsp;&nbsp;
                {report.sender.hostname}&nbsp;&nbsp;<i>({report.sender.ipAddr}:{report.sender.port})</i>
              </h3>
            </div>
            <div className="panel-body">
                <ServersTable servers={report.alive} />
            </div>
        </div>
            <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">Suspected Servers</h3>
                </div>
                <div className="panel-body">
                    <ServersTable servers={report.suspected} />
                </div>
            </div>
        </span>
    );
}

export default Report;
