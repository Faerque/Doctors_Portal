import React from "react";
import DoctorImg from "../../../images/doctor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Doctor = () => {
  return (
    <div className="col-md-4 text-center">
      <img src={DoctorImg} className="img-fluid mb-3" alt="" />
      <h4 style={{ color: "#3D4458" }}> Dr. Coudi</h4>
      <p>
        {" "}
        <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}>
          {" "}
        </FontAwesomeIcon>{" "}
        +880 123 779 23409{" "}
      </p>
    </div>
  );
};

export default Doctor;
