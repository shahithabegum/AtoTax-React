import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import {FormModel} from '../../../shared/FormModel'
import ViewGstClientAddressEx from "./ViewGstClientAddressEx"
import {GetGstClientAddress,DeleteGstClientAddress} from '../../../service/GstClientAddressService'
import { toast } from 'react-toastify';
const GstClientAddressEx = (props) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({});
  let navigate = useNavigate();
  const columns = [
    
   
    {title: "Proprietor Name", field:"gstClient.proprietorName"},
    {title: "Address Type", field:"addressType.addressTypeName"},
    {title: "Address Line", field:"addressLine1"},
    {title: "District", field:"district"},
    {title: "State", field:"state"},
    {title: "Status", field:"status.statusType"},
  ]
    const [addressExtension, setAddressExtension] = useState([])
    useEffect(() => {
     GetDetails();
    }, [])
    
    const GetDetails = ()=>{
      GetGstClientAddress().then(res=>setAddressExtension(res.data.result));
    }
    const GoEdit = (item)=>{
      console.log(props , item)
      navigate('/UpdateGStClientAddressEx', { state: item })
  }
//   const GoView = (item)=>{
//     console.log(props , item)
//     navigate('/ViewGStClientAddressEx', { state: item })
// }
  const DeleteGSTClientAddressExtension = (item)=>{
    DeleteGstClientAddress(item.id).then(res=>{
      if(res?.data?.isSuccess){
        toast.error(res.data.successMessage)
        GetDetails()
      }else{
        toast.error(res.data.errorMessages.toString())
      }
    })
    }

  console.log("Addresstype",addressExtension)
  
  return (
    <div className='Table-div'>
      <div className='headcontainer'>
        <h2 className="Tableheading ml-1">Client Address Extensions</h2>
        <Link to="/createGStClientAddressEx"> <button className='btn btn-success ml-1  mt-2 m-0' >Add</button></Link>
        {/* <button className='btn btn-success ml-1  mt-2 ml-3' onClick={()=>setShowAdd(true)} >Add</button> */}
      </div>

  <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
        <MaterialTable
           title="Address Extensions"
           data={addressExtension}
           columns={columns}
           actions={[
            rowData=>({icon: ()=><FaEdit style={{color:"green"}}/>,
            tooltip: 'edit User',
            onClick:(event,rowData)=>GoEdit(rowData)
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
              onClick:(event,rowData)=>DeleteGSTClientAddressExtension(rowData)
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
     title={<h2 className=" view ml-2">GST Client Address Extension</h2>}
     >
     <ViewGstClientAddressEx onHide={()=>{setShow(false)}}  item={value}/>
     </FormModel>
  </div>
  )
}

export default GstClientAddressEx