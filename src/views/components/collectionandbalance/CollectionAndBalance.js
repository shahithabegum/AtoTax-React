import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link} from 'react-router-dom'
import CollectionAndBalanceView from './CollectionAndBalanceView'
import { BsEye } from "react-icons/bs";
import {GetAllProcessTrackingAndFeeBalances} from '../../../service/CollectionAndBalanceService'
import {FormModel} from '../../../shared/FormModel'

const CollectionAndBalance = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({});
  const columns = [
     
    {title: "Proprietor Name", field:"gstClient.proprietorName"},
    {title: "Due Month", field:"dueMonth"},
    {title: "Due Year", field:"dueYear"},
    {title: "Return Type", field:"frequency.gstReturnFreqType"},
    {title: "Bills Received", field:"isGSTBillReceived",render : rowData=>{
      return(
        rowData.isGSTBillReceived === true ? <div><i class="fa fa-check" aria-hidden="true" style={{fontSize:"20px",textAlign:"center",color:'green'
      }}></i></div> : <div><i class="fa fa-close" aria-hidden="true" style={{fontSize:"20px",textAlign:"center",color:'red'
    }}></i></div>
      )
    }},
    {title: "GST Filed", field:"isGSTFiled",render : rowData=>{
      return(
        rowData.isGSTFiled === true ? <div><i class="fa fa-check" aria-hidden="true" style={{fontSize:"20px",textAlign:"center",color:'green'
      }}></i></div> : <div><i class="fa fa-close" aria-hidden="true" style={{fontSize:"20px",textAlign:"center",color:'red'
    }}></i></div>
      )
    }},
    {title: "Current Balance", field:"currentBalance"},
  ]
    const [address, setAddress] = useState()
    useEffect(() => {
     GetDetails();
    
    }, [])
    //getting client details
    const GetDetails = ()=>{
      GetAllProcessTrackingAndFeeBalances().then(res=>setAddress(res.data.result));
    }
    console.log("rowdata",value)
    console.log("show",show)
  return (
    <div className='Table-div'>
      <div className='headcontainer'>
        <h2 className="Tableheading ml-1">Process Tracking And Fee Balances</h2>
       

      </div>

  <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
        <MaterialTable
           title="Process Tracking And Fee Balances"
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
     title={<h2 className=" view ml-2">Process Tracking And Fee Balance</h2>}
     >
     <CollectionAndBalanceView onHide={()=>{setShow(false)}}  item={value}/>
     </FormModel>
    </div>
 
  )
}

export default CollectionAndBalance