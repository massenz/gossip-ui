import React from 'react';
import ServersTable from './ServersTable';

function Report({report}) {

    if (! report.sender) {
        return null;
    }

    const aliveServers = report.alive;
    let suspectedServers = null;
    if (report.suspected) {
        suspectedServers = (
            <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">Suspected Servers</h3>
                </div>
                <div className="panel-body">
                    <ServersTable servers={report.suspected} />
                </div>
            </div>
        );
    }

    return (
        <span>
        <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><b>Server</b>&nbsp;&nbsp;&nbsp;
                {report.sender.hostname}&nbsp;&nbsp;<i>({report.sender.ipAddr})</i>
              </h3>
            </div>
            <div className="panel-body">
                <ServersTable servers={aliveServers} />
            </div>
        </div>
        {suspectedServers}
        </span>
    );
}

export default Report;
