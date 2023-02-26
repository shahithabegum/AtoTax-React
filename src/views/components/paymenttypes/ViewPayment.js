import React, { useEffect, useState } from 'react'
import {Link,useLocation} from 'react-router-dom'

const ViewPayment = () => {
  
    const [item, setItem] = useState([])
    const location = useLocation()
    useEffect(() => {
        setItem(location.state)
       
    }, [])
    return (
    
      <div className='container ml-0'>
           <div style={{display:'flex',justifyContent:"space-between"}}>
            <h2 className="view ml-2">Payment Types</h2>
            <Link to='/PaymentTypes'><button type="button" className="btn btn-warning ml-0 mt-3">Go Back</button></Link>
      </div>
          <div className='displaylist mt-2'>
          <table class="table table-striped table-responsive ml-5 w-full">
             <tbody>
              <tr>
                  <td><b>ID</b></td>
                  <td>{item.id}</td>
              </tr>
              <tr>
                  <td><b>Payment Method </b></td>
                  <td>{item.paymentMethod}</td>
              </tr>
              <tr>
                  <td><b>Status ID</b></td>
                  <td>{item.statusId}</td>
              </tr>
              <tr>
                  <td><b>Created Date</b></td>
                  <td>{item.createdDate}</td>
              </tr><tr>
                  <td><b>LastModified Date</b></td>
                  <td>{item.lastModifiedDate}</td>
              </tr>
             
             </tbody>
             </table>
          </div>
      </div>
    )
}

export default ViewPayment