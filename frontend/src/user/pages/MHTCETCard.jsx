import React from "react";
import { Link ,useParams} from "react-router-dom";

const MHTCETCard = () => {
  const {id}=useParams()
  return (
    <div
      className="card"
      style={{ width: "350px", height: "400px", marginLeft: "58px" }}
    >
      <div className="card-body">
        <h5 className="card-title">MHT-CET</h5>
        <p className="card-text">Maharashtra Common Entrance Test</p>
        <Link to={`/${id}/mht_cet`} className="btn btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default MHTCETCard;
