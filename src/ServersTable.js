import React from 'react';


function ServersTable({servers}) {

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>IP</th>
                <th>Hostname</th>
                <th>Port</th>
                <th>Last updated</th><th>Timestamp (sec from epoch)</th>
            </tr>
            </thead>
            <tbody>{servers.map((serverRecord, idx) => {
                const {server, timestamp} = serverRecord;
                // This is a Unix timestamp in seconds; JS requires msec.
                const date = new Date(timestamp * 1000);
                return (
                    <tr key={"row_" + idx}>
                        <td>{idx}</td>
                        <td>{server.ipAddr}</td>
                        <td>{server.hostname}</td>
                        <td>{server.port}</td>
                        <td>{date.toString()}</td>
                        <td>{timestamp}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default ServersTable;
