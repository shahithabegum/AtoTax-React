import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link} from 'react-router-dom'
import AccountLedgerView from './AccountLedgerView'
import { BsEye } from "react-icons/bs";
import {GetAccountLedger} from '../../../service/AccountLedgerService'
import {FormModel} from '../../../shared/FormModel'
const AccountLedger = () => {
  const [show, setShow] = useState(false);
    const [value, setValue] = useState({});
    const columns = [
      
      {title: "Income Amount", field:"incomeAmount"},
      {title: "Expense Amount", field:"expenseAmount"},
      {title: "Payment Method", field:"paymentType.paymentMethod"},
      {title: "GST Client Paid", field:"isGSTClientPaid",render : rowData=>{
        return(
          rowData.isGSTClientPaid === true ? <div><i class="fa fa-check" aria-hidden="true" style={{fontSize:"20px",textAlign:"center",color:'green'
        }}></i></div> : <div><i class="fa fa-close" aria-hidden="true" style={{fontSize:"20px",textAlign:"center",color:'red'
      }}></i></div>
        )
      }},
      {title: "Recorded By", field:"transactionRecordedBy"},
    ]
      const [address, setAddress] = useState()
      useEffect(() => {
       GetDetails();
      
      }, [])
      //getting client details
      const GetDetails = ()=>{
        GetAccountLedger().then(res=>setAddress(res.data.result));
      }
      console.log("rowdata",value)
      console.log("show",show)
    return (
      <div className='Table-div'>
        <div className='headcontainer'>
          <h2 className="Tableheading ml-1">Accounts Ledger</h2>
          <Link to="/AccountLedgerCreate"> <button className='btn btn-success ml-1  mt-2 m-0' >Add</button></Link>
  
        </div>
  
    <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
          <MaterialTable
             title="Accounts Ledger"
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
       title={<h2 className=" view ml-2">Accounts Ledger</h2>}
       >
       <AccountLedgerView onHide={()=>{setShow(false)}}  item={value}/>
       </FormModel>
      </div>
   
    )
}

export default AccountLedger