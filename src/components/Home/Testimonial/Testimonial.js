import React from 'react';
import './Testimonial.css';

const Testimonial = ({testimonial}) => {
    return (
        <div className="card shadow-sm" style={{margin: '10px'}} >
            <div className="card-body">
                <p className="card-text text-center "> {testimonial.quote} </p>
            </div>
            <div className="card-footer d-flex align-items-center">
                <img src={testimonial.img} alt="" width="60" className="mx-3"/>
                <div> 
                    <h6 className="text-primary" >
                        {testimonial.name}
                    </h6>
                    <p className="m-0"> {testimonial.from} </p>
                </div>
            </div>
            
        </div>
    );
};

export default Testimonial;