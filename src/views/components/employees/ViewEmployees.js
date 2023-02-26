import React, { useEffect, useState } from 'react'
import {Link,useLocation} from 'react-router-dom'

const ViewEmployees = () => {
  const [item, setItem] = useState([])
  const location = useLocation()
  useEffect(() => {
      setItem(location.state)
     
  }, [])
  console.log(item) 
return (
  
  <div className='container ml-0 ' >
       <div style={{display:'flex',justifyContent:"space-between"}}>
          <h2 className=" view ml-2">Details of {location.state.firstName}</h2>
          <Link to='/Employees'><button type="button" className="btn btn-warning ml-5  mt-3">Go Back</button></Link>
    </div>
      <div className='displaylist mt-2 m-auto'>
      <table class="table table-striped table-responsive ml-5 w-full ">
         <tbody>
          <tr>
              <td><b>ID</b></td>
              <td>{item.id}</td>
          </tr>
          <tr>
              <td><b>First Name</b></td>
              <td>{item.firstName}</td>
          </tr>
          <tr>
              <td><b>Last Name</b></td>
              <td>{item.lastName}</td>
          </tr><tr>
              <td><b>Date of birth</b></td>
              <td>{item.dob}</td>
          </tr>
          <tr>
              <td><b>Date of Join</b></td>
              <td>{item.doj}</td>
          </tr>
          <tr>
              <td><b>Email</b></td>
              <td>{item.email}</td>
          </tr>
          <tr>
              <td><b>Contact Number</b></td>
              <td>{item.concactNo}</td>
          </tr>
          {/* <tr>
              <td><b>Job Role</b></td>
              <td>{item.empJobRole.jobRole}</td>
          </tr> */}
          {/* <tr>
              <td><b>Status ID</b></td>
              <td>{item.status.statusType}</td>
          </tr> */}
         </tbody>
         </table>
      </div>
  </div>
)
}

export default ViewEmployees