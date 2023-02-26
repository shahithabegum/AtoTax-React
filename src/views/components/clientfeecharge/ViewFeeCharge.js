import React, { useEffect, useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
const ViewFeeCharge = () => {
  const location = useLocation()
  return (
    
    <div className='container ml-0 my-1'>
         <div style={{display:'flex',justifyContent:"space-between"}}>
          <h2 className="view ml-2">{location.state.serviceCategory.serviceName}</h2>
          <Link to='/Clientfeecharges'><button type="button" className="btn btn-warning my-2 ml-5">Go Back</button></Link>
    </div>
        <div className='displaylist mt-2'>
        <table class="table table-striped table-responsive ml-5 w-full">
           <tbody>
           <tr>
                <td><b>Proprietor Name</b></td>
                <td>{location.state.gstClient.proprietorName}</td>
            </tr>
            <tr>
                <td><b>GST TIN No</b></td>
                <td>{location.state.gstClient.gstin}</td>
            </tr>
            <tr>
                <td><b>Service ID</b></td>
                <td>{location.state.serviceCategory.id}</td>
            </tr>
            <tr>
                <td><b>Description </b></td>
                <td>{location.state.serviceCategory.description}</td>
            </tr>
            <tr>
                <td><b>Fixed Charge </b></td>
                <td>{location.state.serviceCategory.fixedCharge}</td>
            </tr>
            <tr>
                <td><b>Current Charge </b></td>
                <td>{location.state.defaultCharge}</td>
            </tr>
            <tr>
                <td><b>Previous Charge </b></td>
                <td>{location.state.serviceCategory.previousCharge}</td>
            </tr>
            <tr>
                <td><b>Created Date</b></td>
                <td>{location.state.serviceCategory.createdDate}</td>
            </tr><tr>
                <td><b>LastModified Date</b></td>
                <td>{location.state.serviceCategory.lastModifiedDate}</td>
            </tr>
           
           </tbody>
           </table>
        </div>
    </div>
  )
}

export default ViewFeeCharge