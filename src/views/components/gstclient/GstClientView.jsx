import React,{useState,useEffect} from 'react'
import {useLocation,Link} from 'react-router-dom';
//import {GetClientFeeCharge} from '../../../service/ClientFeeChargeSerivce'
import './Gststyle.scss'
const GstClientView = () => {
    //  const [fee, setFee] = useState([])

    const location = useLocation();
  //  useEffect(() => {
  //  getFee()
  //  }, [])
  //  const getFee =()=>{
  //   GetClientFeeCharge().then(res=>{
  //     if(res.data.result ){
  //       setFee(res.data.result)
  //     }
  //     else{
  //       console.log("error")
  //     }
  //   })
  //  }
 
  //  console.log("fee",fee)
  return (
    <div className=' ml-0 mx-2 '>
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <h3 className=' view'>Details of {location.state.proprietorName}</h3>
      <Link to='/Gstclient'><button className='btn  btn-warning ml-3 mt-3 '>Back</button></Link>
      </div>
       
    <div >
   <table class="table table-striped table-responsive ml-3 d-sm-ml-0 p-2 mt-2">
    
    <tbody className='p-2' style={{overflowX:'hidden'}}>
      <tr>
        <td><b>ID</b></td>
        <td>{location.state.id}</td>
        <td><b>GSTAnnual TurnOver</b></td>
        <td>{location.state.gstAnnualTurnOver}</td>
      </tr>
      <tr>
        <td><b>Proprietor Name</b></td>
        <td>{location.state.proprietorName}</td>
        <td><b>GSTSurrendered Date</b></td>
        <td>{location.state.gstSurrenderedDate}</td>
      </tr>
      <tr>
        <td><b>GST TIN</b></td>
        <td>{location.state.gstin}</td>
        <td><b>Contact Name</b></td>
        <td>{location.state.contactName}</td>
      </tr>
      <tr>
        <td><b>GST UserName</b></td>
        <td>{location.state.gstUserName}</td>
        <td><b>Contact EmailId</b></td>
        <td>{location.state.contactEmailId}</td>
      </tr>
      <tr>
        <td><b>GSTUser Password</b></td>
        <td>{location.state.gstUserPassword}</td>
        <td><b>Mobile Number</b></td>
        <td>{location.state.mobileNumber}</td>
      </tr>
      <tr>
        <td><b>GST Email</b></td>
        <td>{location.state.gstEmailId}</td>
        <td><b>Phone Number</b></td>
        <td>{location.state.phoneNumber}</td>
      </tr>
      <tr>
        <td><b>GST Email Password</b></td>
        <td>{location.state.gstEmailPassword}</td>
        <td><b>Eway BillUser Name</b></td>
        <td>{location.state.ewayBillUserName}</td>
      </tr>
      <tr>
        <td><b>GST Recovery Email</b></td>
        <td>{location.state.gstRecoveryEmailId}</td>
        <td><b>Eway Bill Password</b></td>
        <td>{location.state.ewayBillPassword}</td>
      </tr>
      <tr>
        <td><b>GST Recovery Email Password</b></td>
        <td>{location.state.gstRecoveryEmailPassword}</td>
        <td><b>RackFileNo</b></td>
        <td>{location.state.rackFileNo}</td>
      </tr>
      <tr>
        <td><b>GST Registration Date</b></td>
        <td>{location.state.gstRegDate}</td>
        <td><b>Tally DataFile path</b></td>
        <td>{location.state.tallyDataFilePath}</td>
      </tr>
      <tr>
        <td><b>GST Relieved Date</b></td>
        <td>{location.state.gstRelievedDate}</td>
        <td><b>Status Id</b></td>
        <td>{location.state.statusId}</td>
      </tr>
      <tr>
        <td><b>Status Type</b></td>
        <td>{location.state.status.statusType}</td>
      </tr>
    </tbody>
  </table>
  
 </div>
 {/* <div>
  <h3>Client Fee Charge Details</h3> */}
  
 {/* <table class="table table-striped table-responsive ml-3 d-sm-ml-0 p-2">
  <thead>
    <th>Service Name</th>
    <th>Default Charge</th>
    <th>Action</th>
  </thead>
  <tbody>
    {
      fee.map((item,index)=>(
        <tr key={index}>
          <td>{item.serviceCategory.serviceName}</td>
          <td>{item.serviceCategory.defaultCharge}</td>
          <td>edit</td>
        </tr>
      ))
    }
  </tbody>
  </table>
 <div className='mb-2 ml-2'>
      <Link to='/Gstclient'><button className='btn  btn-outline-warning ml-3'>Back</button></Link>
      </div>
 
  */}
</div>

   
  )
}

export default GstClientView