import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import {GetAddressType,Delete_AddressType} from '../../../service/AddressTypesService'
const AddressType = (props) => {
  let navigate = useNavigate();
  const columns = [
    
    {title: "ID", field:"id"},
    {title: "Address Type", field:"addressTypeName"},
    {title: "Address Type Desc", field:"addressTypeDesc"},
    {title: "Status", field:"status.statusType"},
  ]
    const [address, setAddress] = useState([])
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
  const GoView = (item)=>{
    console.log(props , item)
    navigate('/viewAddress', { state: item })
}
  const deleteAddressType = (item)=>{
    Delete_AddressType(item.id).then(res=>{
      GetDetails();
    })
    }

  console.log("Addresstype",address)
  
  return (
    <div className='Table-div'>
      <div className='headcontainer'>
        <h2 className="Tableheading ml-1">Address Types</h2>
        <Link to="/addAddress"> <button className='btn btn-success ml-1  mt-2 m-0' >Add</button></Link>
        {/* <button className='btn btn-success ml-1  mt-2 ml-3' onClick={()=>setShowAdd(true)} >Add</button> */}
      </div>

  <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
        <MaterialTable
           title="Address Types"
           data={address}
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
              onClick:(event,rowData)=>deleteAddressType(rowData)
            }),
          ]}
          options={{
            exportButton: true,
            actionsColumnIndex: -1,
          
          }}
          
        />
      </div>
    
  </div>
  )
  
}

export default AddressType