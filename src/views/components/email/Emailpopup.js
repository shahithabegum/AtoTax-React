import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './email.scss'

const Emailpopup = ({email}) => {



  return (
    <div className="container">
      <div className="emailpopupwarapper">
        <div className="emailContent">
            <h2 className="text-center Tableheading mt-0">Email Verification</h2>
            <p className="text-center mt-3" style={{fontSize:"20px"}}>
                We have sent email to <Link to={email}> {email}  </Link> to confrim the validity <br></br>of our
                email address.After receiving the email follow<br></br> the link 
                provided to complete your registeration 
            </p>
        </div>

      </div>
    </div>
  );
    
};

export default Emailpopup;
