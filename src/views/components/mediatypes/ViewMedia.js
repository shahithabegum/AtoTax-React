import React, { useEffect, useState } from 'react'
import {Link,useLocation} from 'react-router-dom'

const ViewMedia = () => {
    // const [item, setItem] = useState([])
    const location = useLocation()
    // useEffect(() => {
    //     setItem(location.state)
       
    // }, [])
    console.log("media",location.state)
    return (
    
        <div className='container ml-0'>
          <div style={{display:'flex',justifyContent:"space-between"}}>
            <h2 className="view ml-2">Media Types</h2>
            <Link to='/MediaTypes'><button type="button" className="btn btn-warning ml-0 mt-3">Go Back</button></Link>
      </div>
         <div className='displaylist mt-2'>
            <table class="table table-striped table-responsive ml-5 w-full">
               <tbody>
                <tr>
                    <td><b>ID</b></td>
                    <td>{location.state.id}</td>
                </tr>
                <tr>
                    <td><b>Media</b></td>
                    <td>{location.state.media}</td>
                </tr>
                <tr>
                    <td><b>Description</b></td>
                    <td>{location.state.description}</td>
                </tr>
                <tr>
                    <td><b>Status ID</b></td>
                    <td>{location.state.statusId}</td>
                </tr>
                <tr>
                    <td><b>Status Type</b></td>
                    <td>{location.state.status.statusType}</td>
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

export default ViewMedia