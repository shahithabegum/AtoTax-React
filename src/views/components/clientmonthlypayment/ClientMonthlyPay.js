import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link} from 'react-router-dom'
import ClientMonthlypayView from './ClientMonthlypayView'
import { BsEye } from "react-icons/bs";
import {GetMonthlyPayment} from '../../../service/MonthlyPaymentService'
import {FormModel} from '../../../shared/FormModel'

const ClientMonthlyPay = (props) => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState({});
    const columns = [
      
      {title: "Proprietor Name", field:"gstClient.proprietorName"},
      {title: "Due Month", field:"dueMonth"},
      {title: "Due Year", field:"dueYear"},
      {title: "Received Amount", field:"receivedAmount"},
      {title: "Recorded By", field:"transactionRecordedBy"}
    ]
      const [address, setAddress] = useState()
      useEffect(() => {
       GetDetails();
      
      }, [])
      //getting client details
      const GetDetails = ()=>{
        GetMonthlyPayment().then(res=>setAddress(res.data.result));
      }
      console.log("rowdata",value)
      console.log("show",show)
    return (
      <div className='Table-div'>
        <div className='headcontainer'>
          <h2 className="Tableheading ml-1">Client Monthly Payments</h2>
          <Link to="/MonthlypayCreate"> <button className='btn btn-success ml-1  mt-2 m-0' >Add</button></Link>
  
        </div>
  
    <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
          <MaterialTable
             title="Monthly Payments"
             data={address}
             columns={columns}
             actions={[
              rowData=>({icon: ()=><BsEye style={{color:"blue"}}/>,
              tooltip: 'view User',
              onClick:(event,rowData)=>{ setValue(rowData)
              setShow(true)}
              }),
            ]}
            options={{
              exportButton: true,
              actionsColumnIndex: -1,
            
            }}
            
          />
        </div>
        <FormModel 
       show={show}
       onHide={()=>{setShow(false)}}
       title={<h2 className=" view ml-2">Payment Dtails</h2>}
       >
       <ClientMonthlypayView onHide={()=>{setShow(false)}}  item={value}/>
       </FormModel>
      </div>
   
    )
}

export default ClientMonthlyPay