import React from 'react';
import { Link ,useParams} from 'react-router-dom';
const JEEMainsCard = () => {
  const {id}=useParams()
    return (
      <div
        className="card"
        style={{ width: "350px", height: "400px", marginLeft: "58px" }}
      >
        <div className="card-body">
          <h5 className="card-title">JEE Mains</h5>
          <p className="card-text">Joint Entrance Examination Mains</p>
          <Link to={`/${id}/jee`} className="btn btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    );
}

export default JEEMainsCard;