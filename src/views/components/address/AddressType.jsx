import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import ViewAdressType from './ViewAdressType'
import {GetAddressType,Delete_AddressType} from '../../../service/AddressTypesService'
import {FormModel} from '../../../shared/FormModel'
import { toast } from 'react-toastify';
const AddressType = (props) => {
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
        GetAddressType().then(res=>setAddress(res.data.result));
    }
    const GoEdit = (item)=>{
      console.log(props , item)
      
      navigate('/editAddress', { state: item })
  }
  const deleteAddressType = (item)=>{
    Delete_AddressType(item.id).then(res=>{
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
        <h2 className="Tableheading ml-1">Address Types</h2>
        <Link to="/addAddress"> <button className='btn btn-success ml-1  mt-2 m-0' >Add</button></Link>

      </div>

  <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
        <MaterialTable
           title="Address Types"
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
              onClick:(event,rowData)=>deleteAddressType(rowData)
              

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
     title={<h2 className=" view ml-2">Address Type</h2>}
     >
     <ViewAdressType onHide={()=>{setShow(false)}}  item={value}/>
     </FormModel>
    </div>
 
  )
  
}

export default AddressType