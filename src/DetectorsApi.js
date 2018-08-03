import axios from "axios";

const API_REPORT = "/api/v1/report"

function queryDetector(ipAddress) {
    const url = "http://" + ipAddress + API_REPORT;
    console.log("Connecting to REST API: " + url);
    return axios.get(url);
}

export default queryDetector;
