import React from "react";
import featured from "../../../images/Featured.png";

const FeaturedService = () => {
  return (
    <section>
      <div className="container mb-5">
        <div className="row mt-5">
          <div className="col-md-5 mb-4 m-md-0">
            <img src={featured} alt="" className="img-fluid" />
          </div>
          <div className="col-md-7 align-self-center">
            <h1 style={{ color: "#3D4457" }}>
              {" "}
              Exceptional Dental Care, on Your Terms{" "}
            </h1>
            <p className="text-secondary my-5 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              a sapiente molestiae facilis inventore fuga repellat quis odio
              provident facere ab labore, porro sequi dolores ad placeat
              nesciunt ipsam? Tempora!
            </p>
            <button className="btn btn-outline-dark"> Learn More </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
