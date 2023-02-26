import React, { useEffect, useState } from 'react'
import {useLocation,Link} from 'react-router-dom'

const ViewGstClientAddressEx = () => {
  const location = useLocation()
  return (
    <div className='container ml-0' >
             <div style={{display:'flex',justifyContent:"space-between"}}>
            <h2 className="view ml-2">Address Detail of {location.state.gstClient.proprietorName}</h2>
            <Link to='/GStClientAddressEx'><button type="button" className="btn btn-warning ml-0 my-3">Go Back</button></Link>
      </div>
            <div className='displaylist mt-2'>
            <table class="table table-striped table-responsive ml-5 w-full ">
               <tbody>
                <tr>
                    <td><b>ID</b></td>
                    <td>{location.state.id}</td>
                </tr>
                <tr>
                    <td><b>GST Client Id</b></td>
                    <td>{location.state.gstClientID}</td>
                </tr>
                <tr>
                    <td><b>Address Type Id</b></td>
                    <td>{location.state.addressTypeId}</td>
                </tr>
                <tr>
                    <td><b>Address Type</b></td>
                    <td>{location.state.addressType.addressTypeName}</td>
                </tr>
               
                <tr>
                    <td><b>Address Line 1</b></td>
                    <td>{location.state.addressLine1}</td>
                </tr>
                <tr>
                    <td><b>AddressLine 2</b></td>
                    <td>{location.state.addressLine2}</td>
                </tr>
                <tr>
                    <td><b>Address Line 3</b></td>
                    <td>{location.state.addressLine3}</td>
                </tr>
                <tr>
                    <td><b>City</b></td>
                    <td>{location.state.city}</td>
                </tr>
                <tr>
                    <td><b>District</b></td>
                    <td>{location.state.district}</td>
                </tr>
                <tr>
                    <td><b>State</b></td>
                    <td>{location.state.state}</td>
                </tr>
                <tr>
                    <td><b>Pincode</b></td>
                    <td>{location.state.pincode}</td>
                </tr>
                <tr>
                    <td><b>Status ID</b></td>
                    <td>{location.state.statusId}</td>
                </tr>
                <tr>
                    <td><b>Created Date</b></td>
                    <td>{location.state.createdDate}</td>
                </tr><tr>
                    <td><b>LastModified Date</b></td>
                    <td>{location.state.lastModifiedDate}</td>
                </tr>
               
               </tbody>
               </table>
               
            </div>
        </div>
      )
  
}

export default ViewGstClientAddressEx