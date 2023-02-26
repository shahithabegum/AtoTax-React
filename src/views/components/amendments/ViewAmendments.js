import React, { useEffect, useState } from 'react'
import {useLocation,Link} from 'react-router-dom'

const ViewAmendments = () => {
  const location = useLocation()
  return (
    
    <div className='container ml-0' >
         <div style={{display:'flex',justifyContent:"space-between"}}>
        <h2 className="view ml-2">Amendment</h2>
        <Link to='/amendments'><button type="button" className="btn btn-warning ml-5 mt-3">Go Back</button></Link>
  </div>
        <div className='displaylist mt-2'>
        <table class="table table-striped table-responsive ml-5 w-full ">
           <tbody>
            <tr>
                <td><b>Amendment Id</b></td>
                <td>{location.state.id}</td>
            </tr>
            <tr>
                <td><b>Proprietor Name</b></td>
                <td>{location.state.gstClient.proprietorName}</td>
            </tr> 
            <tr>
                <td><b>GST TIN</b></td>
                <td>{location.state.gstClient.gstin}</td>
            </tr>
            <tr>
                <td><b>Amend Type Id</b></td>
                <td>{location.state.amendTypeId}</td>
            </tr>
            <tr>
                <td><b>Amend Type Name</b></td>
                <td>{location.state.amendType.amendTypeName}</td>
            </tr> 
            <tr>
                <td><b>arn</b></td>
                <td>{location.state.arn}</td>
            </tr>
            <tr>
                <td><b>Sumitted Date</b></td>
                <td>{location.state.sumittedDate}</td>
            </tr>
            <tr>
                <td><b>Approved Date</b></td>
                <td>{location.state.approvedDate}</td>
            </tr>
            
            <tr>
                <td><b>Status ID</b></td>
                <td>{location.state.statusId}</td>
            </tr>
            <tr>
                <td><b>Status Type</b></td>
                <td>{location.state.approvalStatusType.statusType}</td>
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

export default ViewAmendments