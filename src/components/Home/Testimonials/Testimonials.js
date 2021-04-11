import React from "react";
import "./Testimonials.css";
import wilson from "../../../images/Wilson.png";
import ema from "../../../images/Ema.png";
import aliza from "../../../images/Aliza.png";
import Testimonial from "../Testimonial/Testimonial";

const testimonialData = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, vero voluptate? Soluta impedit ullam molestiae.",
    name: "Wilson Harry",
    from : 'California',
    img: wilson,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, vero voluptate? Soluta impedit ullam molestiae.",
    name: "Ema Gomez",
    from : 'California',
    img: ema,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, vero voluptate? Soluta impedit ullam molestiae.",
    name: "Aliza Farari",
    from : 'California',
    img: aliza,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials my-5 py-5">
      <div className="container">
        <div className="section-header">
          <h5 className="text-primary"> TESTIMONIALS </h5>
          <h1  style={{color: '#3D4457'}} >
            {" "}
            What Our Patients <br /> Says{" "}
          </h1>
        </div>
        <div  className="card-deck d-flex mt-5">
            {
                testimonialData.map(testimonial => <Testimonial testimonial={testimonial}> </Testimonial>)
            }
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
