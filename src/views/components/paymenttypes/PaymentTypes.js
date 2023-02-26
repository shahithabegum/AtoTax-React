import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import {DeletPayments,GetPayments} from '../../../service/PaymentTypeService'
const Paymenttypes = (props) => {
  let navigate = useNavigate();
  const columns = [
    
    {title: "Id", field:"id"},
    {title: "Payment Method", field:"paymentMethod"},
    {title: "Created Date", field:"createdDate"},
    {title: "Status ", field:"status.statusType"},
  ]
    const [payment, setPayment] = useState([])
    useEffect(() => {
     GetDetails();
    }, [])
    //getting client details
    const GetDetails = ()=>{
      GetPayments().then(res=>setPayment(res.data.result));
    }
    const GoEdit = (item)=>{
      console.log(props , item)
      navigate('/editPayment', { state: item })
  }
  const GoView = (item)=>{
    console.log(props , item)
    navigate('/viewPayment', { state: item })
}
  const DeletePaymentType = (item)=>{
    DeletPayments(item.id).then(res=>{
      GetDetails();
    })
    }
    return (
      <div className='Table-div'>
        <div className='headcontainer'>
          <h2 className="Tableheading">Payments Types</h2>
          <Link to="/addPayment"> <button className='btn btn-success ml-1  mt-2 mx-1' >Add</button></Link>
          {/* <button className='btn btn-success ml-1  mt-2 ml-3' onClick={()=>setShowAdd(true)} >Add</button> */}
        </div>
  
    <div style={{ maxWidth: '100%' }} className='container mt-2 mx-0'>
          <MaterialTable
             title="Payments"
             data={payment}
             columns={columns}
             actions={[
              rowData=>({icon: ()=><FaEdit style={{color:"green"}}/>,
              tooltip: 'edit User',
              onClick:(event,rowData)=>GoEdit(rowData)
              }),
              rowData=>({icon: ()=><BsEye style={{color:"blue"}}/>,
              tooltip: 'view User',
              onClick:(event,rowData)=>GoView(rowData)
              }),
              rowData=>( {
                icon: 'delete',
                iconProps: { color: 'secondary' },
                tooltip: 'dalete User',
                onClick:(event,rowData)=>DeletePaymentType(rowData)
              }),
            ]}
            options={{
              exportButton: true,
              actionsColumnIndex: -1,
            
            }}
            
          />
        </div>
        
        {/* <FormModel
                          show={showAdd}
                          onHide={() =>setShowAdd(false)}
                          submitButtonText={'CREATE'}
                          title={'Create Gst'}
                      >
                          <GstForm onHide={() =>setShowAdd(false)  } />
                      </FormModel> */}
                      {/* <FormModel
                          show={showEdit}
                          onHide={() =>setShowAdd(false)}
                          submitButtonText={'CREATE'}
                          title={'Create Gst'}
                      >
                          <GstEditing onHide={() =>setShowAdd(false)  } />
                      </FormModel> */}
    </div>
    )
}

export default Paymenttypes