import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import {GetPaidDetails,DeletPaidDetails} from '../../../service/GstPaidDetailService'
import {FormModel} from '../../../shared/FormModel'
import { toast } from 'react-toastify';
const GstPaidDetails = (props) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({});
  let navigate = useNavigate();
  const columns = [
    
    {title: "ID", field:"id"},
    {title: "Address Type", field:"addressTypeName"},
    {title: "Address Type Desc", field:"addressTypeDesc"},
    {title: "Status", field:"status.statusType"},
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
      
      navigate('/editAddress', { state: item })
  }
//   const GoView = (item)=>{
//     console.log("item",item)
   
//     const data=item
//     console.log("data",data)
   
//     // setShow(true)
 
  
    
// }
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
        <Link to="/addAddress"> <button className='btn btn-success ml-1  mt-2 m-0' >Add</button></Link>
        {/* <button className='btn btn-success ml-1  mt-2 ml-3' onClick={()=>setShowAdd(true)} >Add</button> */}
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
      {/* <FormModel 
     show={show}
     onHide={()=>{setShow(false)}}
     title={<h2 className=" view ml-2">Address Types</h2>}
     >
     <ViewAdressType onHide={()=>{setShow(false)}}  item={value}/>
     </FormModel> */}
    </div>
 
  )
  
}

export default GstPaidDetails