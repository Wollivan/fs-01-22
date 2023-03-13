import React, { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, []);

  async function getJobs() {
    const API = "http://localhost:8080/jobs";
    const res = await axios.get(API);
    setJobs(res.data);
  }

  return (
    <>
      {jobs.length &&
        jobs.map((job, idx) => (
          <div key={idx}>
            <h3>Vault Tec</h3>
            <h2>
              <a href={job.url}>{job.name}</a>
            </h2>
            <p>{job.description}</p>
            <p>{job.location}</p>
          </div>
        ))}
    </>
  );
}

export default Main;
