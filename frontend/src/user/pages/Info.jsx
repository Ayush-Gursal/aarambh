import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MHTCETCard from './MHTCETCard';
import JEEMainsCard from './JEEMainsCard';
import "./Info.css"

function Info() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center bg-primary text-white py-4">
          <h1>Information of Exams</h1>
        </div>
      </div>
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-lg-4 col-md-6 order-md-1 order-2">
          <MHTCETCard />
        </div>
        <div className="col-lg-4 col-md-6 order-md-2 order-1">
          <JEEMainsCard />
        </div>
      </div>
    </div>
  );
}

export default Info;