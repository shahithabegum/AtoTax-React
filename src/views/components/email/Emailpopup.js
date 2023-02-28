import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './email.scss'

const Emailpopup = ({email}) => {



  return (
    <div className="container">
      <div className="emailpopupwarapper">
        <div className="emailContent">
            <h2 className="text-center Tableheading">Email Verification</h2>
            <p className="text-center" style={{fontSize:"20px"}}>
                We have sent email to <Link to={email}> {email}  </Link> to confrim the validity <br></br>of our
                email address.After receicing the email follow<br></br> the link 
                provided to complete you Registeration 
            </p>
        </div>

      </div>
    </div>
  );
    
};

export default Emailpopup;
