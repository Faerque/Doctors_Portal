import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
      <main style={{height: '800px'}} className=" row d-flex align-items-center">
          
          <div className="col-md-4 offset-md-1">
            <h1 style={{color: '#3A4256'}} > Your New Smile <br/> Starts Here... </h1>
            <p className="text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut magni similique dolorem quaerat ex nihil earum necessitatibus reiciendis officia saepe mollitia
            </p>
            <button className="btn btn-outline-dark">
                GET APPOINTMENT
            </button>
          </div>
          <div className="col-md-6">
             <img  src={chair} alt="" className="fluid"/> 
          </div>
      </main>
    );
};

export default HeaderMain;
