import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import {GetPaidDetails,DeletPaidDetails} from '../../../service/GstPaidDetailService'
import ViewGstPaid from './ViewGstPaid'
import {FormModel} from '../../../shared/FormModel'
import { toast } from 'react-toastify';
const GstPaidDetails = (props) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({});
  let navigate = useNavigate();
  const columns = [
    
    {title: "GST Client", field:"gstClient.proprietorName"},
    {title: "Service Category", field:"serviceCategory.serviceName"},
    {title: "Payment Type", field:"paymentType.paymentMethod"},
    {title: "Amount", field:"amount"},
    
  ]
    const [address, setAddress] = useState()
    useEffect(() => {
     GetDetails();
    
    }, [])
    //getting client details
    const GetDetails = ()=>{
      GetPaidDetails().then(res=>setAddress(res.data.result));
    }
    const GoEdit = (item)=>{
      console.log(props , item)
      
      navigate('/updateGstPaiddetails', { state: item })
  }
  const deletepaidDetails = (item)=>{
    DeletPaidDetails(item.id).then(res=>{
      if(res?.data?.isSuccess){
        toast.error(res.data.successMessage)
        GetDetails()
      }else{
        toast.error(res.data.errorMessages.toString())
      }
      
    })
    }

  
    console.log("rowdata",value)
    console.log("show",show)
  return (
    <div className='Table-div'>
      <div className='headcontainer'>
        <h2 className="Tableheading ml-1">GST Paid Details</h2>
        <Link to="/createGstPaiddetails"> <button className='btn btn-success ml-1  mt-2 m-0' >Add</button></Link>
       
      </div>

  <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
        <MaterialTable
           title="Paid Details"
           data={address}
           columns={columns}
           actions={[
            rowData=>({icon: ()=><FaEdit style={{color:"green"}}/>,
            tooltip: 'edit User',
            onClick:(event,rowData)=>{GoEdit(rowData)
             }
            }),
            rowData=>({icon: ()=><BsEye style={{color:"blue"}}/>,
            tooltip: 'view User',
            onClick:(event,rowData)=>{ setValue(rowData)
            setShow(true)}
            }),
            rowData=>( {
              icon: 'delete',
              iconProps: { color: 'secondary' },
              tooltip: 'dalete User',
              onClick:(event,rowData)=>deletepaidDetails(rowData)
              

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
     title={<h2 className=" view ml-2">GST Paid Details</h2>}
     >
     <ViewGstPaid onHide={()=>{setShow(false)}}  item={value}/>
     </FormModel>
    </div>
 
  )
  
}

export default GstPaidDetails