import React ,{useState}from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import {Update_BillAndFee} from '../../../service/BIllAndFeeCollectionService'
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
const ViewBillAndFeeCollection = () => {
    const location =useLocation();
    const [data, setData] = useState({
        id:location.state.id,
        gstClientID:location.state.gstClientID,
        dueMonth:location.state.dueMonth,
        dueYear:location.state.dueYear,
    })
    let navigate = useNavigate()
 
    console.log("viewaddress",data)
    const receivedDate=location.state.receivedDate
   var ReceivedDate = new Date(receivedDate).toLocaleDateString();
   const filedDate=location.state.salesFiledDate
   var FiledDate = new Date(filedDate).toLocaleDateString();
   const UpdateBillAndFee = () =>{
    Update_BillAndFee(data,location.state.id).then(res=>{
        if(res?.data?.isSuccess){
          navigate('/billandfeecollection')
        }
        else{
          toast.error(res?.data?.errorMessages.toString())
        }
      })
      
   }
   const handleCancle =()=>{
    navigate('/billandfeecollection')
  }
  var isFiled=location.state.isFiled
  var filed=location.state.filedBy;
  if(filed===null){
    filed="To Be Filed";
    console.log("file",filed)
  }
  console.log("file",location.state)
  return (
  
      <div className='container mt-5' >
          
  
          <div className='displaylist mt-2 ml-0 m-auto p-5'>
          <div className='headcontainer'>
        <h2 className="Tableheading ml-1">GST Bills Processing</h2>
       
      </div>
  <table class="table table-responsive m-auto mt-3">
          <tbody className='view-table-body'>
              <tr>
                  <td className='tilte-td'><b>Proprietor Name</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.gstClient.proprietorName}</td>
                  <td className='tilte-td'><b>Sales Invoice</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.salesInvoice.toString()}</td>
                  <td className='tilte-td'><b>Purchase Invoice</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.purchaseInvoice.toString()}</td>
              </tr>
              <tr>
              <td className='tilte-td'><b>GST TIN</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.gstClient.gstin}</td>
                  <td className='tilte-td'><b>Sales Bills Nil</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.salesBillsNil.toString()}</td>
                  <td className='tilte-td'><b>Purchase Nil</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.purchaseNil.toString()}</td>
             </tr>
             <tr>
             <td  className='tilte-td'><b>Rack File No</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.rackFileNo}</td> 
                  <td className='tilte-td'><b>Sales Filed</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.salesFiled}</td>
                  <td className='tilte-td'><b>GSTR3B Filed</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.gstR3BFiled}</td>
             </tr>
             <tr>
             <td  className='tilte-td'><b>Frequency Type</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.returnFrequencyType}</td>
                  <td className='tilte-td'><b>Sales Not Filed</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.salesNotFiled}</td>
                  <td className='tilte-td'><b>GSTR3B Not Filed</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.gstR3BNilNotFiled}</td>
             </tr>
             <tr>
             <td  className='tilte-td'><b>Due Month</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.dueMonth}</td>
                  <td className='tilte-td'><b>Sales Nil Filed</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.salesNilFiled}</td>
                  <td className='tilte-td'><b>GSTR3B Nil Filed</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.gstR3BNILFiled}</td>
             </tr>
             <tr>
             <td  className='tilte-td'><b>Due Year</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.dueYear}</td>
                  <td className='tilte-td'><b>Sales Nil Not Filed</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.salesNilNotFiled}</td>
                  <td className='tilte-td'><b>GSTR3B Nil Not Filed</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.gstR3BNilNotFiled}</td>
             </tr>
             <tr>
             <td  className='tilte-td'><b>gst Tax Amount</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.gstTaxAmount}</td>
                  <td className='tilte-td'><b>GSTR1 Filed By</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.gstR1FiledByUser}</td>
                  <td className='tilte-td'><b>GSTR3B Filed By</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.gstR3BFiledByUser}</td>
             </tr>
             <tr>
             <td  className='tilte-td'><b>Fees Amount</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.feesAmount}</td>
                  <td className='tilte-td'><b>Sales Filed Date</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.salesFiledDate}</td>
                  <td className='tilte-td'><b>GSTR3B Filed Date</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.gstR3BFiledDate}</td>
             </tr>
             <tr>
             <td  className='tilte-td'><b>Amount Paid</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.amountPaid}</td>
                  <td  className='tilte-td'><b>Received By User</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.receivedByUser}</td>

             </tr>
             <tr>
             <td  className='tilte-td'><b>Current Balance</b></td>
                  <td  className='tilte-td'><b>: </b>{location.state.currentBalance}</td>
                  <td  className='tilte-td'><b>Received Date</b></td>
                  <td  className='tilte-td'><b>: </b>{ReceivedDate}</td>
             </tr>
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