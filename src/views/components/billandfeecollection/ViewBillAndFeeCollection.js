import React ,{useState}from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import {Update_BillAndFee} from '../../../service/BIllAndFeeCollectionService'
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
const ViewBillAndFeeCollection = () => {
    const location =useLocation();
    // const [data, setData] = useState({
    //     id:location.state.id,
    //     gstClientID:location.state.gstClientID,
    //     dueMonth:location.state.dueMonth,
    //     dueYear:location.state.dueYear,
    // })
    let navigate = useNavigate()
 //
  //   console.log("viewaddress",data)
//     const receivedDate=location.state.receivedDate
//    var ReceivedDate = new Date(receivedDate).toLocaleDateString();
//    const filedDate=location.state.filedDate
//    var FiledDate = new Date(filedDate).toLocaleDateString();
   const UpdateBillAndFee = () =>{
    // Update_BillAndFee(data,location.state.id).then(res=>{
    //     if(res?.data?.isSuccess){
    //       navigate('/billandfeecollection')
    //     }
    //     else{
    //       toast.error(res?.data?.errorMessages.toString())
    //     }
    //   })
      
   }
   const handleCancle =()=>{
    navigate('/billandfeecollection')
  }
//   var isFiled=location.state.isFiled
//   var filed=location.state.filedBy;
//   if(filed===null){
//     filed="To Be Filed";
//     console.log("file",filed)
//   }
  console.log("file",location.state)
  return (
  
      <div className='container mt-5' >
          
  
          <div className='displaylist mt-2 ml-0 m-auto p-5'>
          <div className='headcontainer'>
        <h2 className="Tableheading ml-1">GST Bills Processing</h2>
       
      </div>
  <table class="table table-responsive m-auto mt-3">
          <tbody className='view-table-body'>
              {/* <tr>
                  <td className='tilte-td'><b>Proprietor Name</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.gstClient.proprietorName}</td>
                  <td className='tilte-td'><b>GST TIN</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.gstClient.gstin}</td>
              </tr>
              <tr>
                  <td  className='tilte-td'><b>Service Name</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.serviceCategory.serviceName}</td>
                  <td  className='tilte-td'><b>Multimedia</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.multimediaType.media}</td>
              </tr>
              <tr>
                  <td  className='tilte-td'><b>Filing Type</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.gstFilingType.filingType}</td>
                  <td  className='tilte-td'><b>Due Month</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.dueMonth}</td>
              </tr>
          
              <tr>
                  <td  className='tilte-td'><b>Due Year</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.dueYear}</td>
                  <td  className='tilte-td'><b>Received By</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.receivedBy}</td>
              </tr>

              <tr>
              <td  className='tilte-td'><b>Bills Received</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.isBillsReceived.toString()}</td>
                  <td  className='tilte-td'><b>Received Date</b></td>
                  <td  className='tilte-td'><b>: </b>{ReceivedDate}</td>
                  
              </tr>
              <tr>
                
                  <td  className='tilte-td'><b>Filed </b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.isFiled.toString()}</td>
                  <td  className='tilte-td'><b>Filed By</b></td>
                  <td  className='tilte-td'><b>: </b>{filed}</td>
              </tr>
              <tr>
                 
                  <td  className='tilte-td'><b>Filed Date</b></td>
                  <td  className='tilte-td'><b>: </b>{FiledDate}</td>
              </tr>
              */}
          </tbody>
         
          </table>
        
          <Row className='my-1 mx-1'>
              <Col m={6} sm={12} ml-0 lg={6}>
              <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 '  onClick={()=>UpdateBillAndFee()}>File GST</button>
              <button type="submit" className='btn  btn-outline-danger col-sm-10 col-lg-4 my-1 ml-3'  onClick={()=>handleCancle()}>Cancel</button>
              </Col>
             
              </Row>
        
          </div>
         
          </div>
  )
}

export default ViewBillAndFeeCollection