import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import {GetEmpJobRole,DeleteEmpJobRole} from '../../../service/EmpJobRoleService'
import {FormModel} from '../../../shared/FormModel'
import ViewEmpJobRole from './ViewEmpJobRole'
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { toast } from 'react-toastify';
const EmpJobRole = (props) => {
  const [amendType, setAmendType] = useState([])
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({});
  useEffect(() => {
   GetDetails();
  }, [])
  let navigate = useNavigate();

  const columns = [
    {title: "Job Role", field:"jobRole"},
    {title: "Job Description", field:"jobDescription"},
    {title: "Status", field:"status.statusType"},
  
  ]
    //getting client details
    const GetDetails = ()=>{
      GetEmpJobRole().then(res=>setAmendType(res.data.result));
    }
    const GoEdit = (item)=>{
      console.log(props , item)
      navigate('/editEmpJobRole', { state: item })
  }
  const deleteJob = (item)=>{
    DeleteEmpJobRole(item.id).then(res=>{
      if(res?.data?.isSuccess){
        toast.error(res.data.successMessage)
        GetDetails()
      }else{
        toast.error(res.data.errorMessages.toString())
      }
    })
    }

console.log("AmendType",amendType)
  
  return (
    <div className='Table-div'>
      <div className='headcontainer'>
        <h2 className="Tableheading ml-1">Employee Job Role</h2>
        <Link to="/addEmpJobRole"> <button className='btn btn-success ml-1  mt-2 m-0' >Add</button></Link>
      </div>

  <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
        <MaterialTable
         title="Job Role"
           data={amendType}
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
              onClick:(event,rowData)=>deleteJob(rowData)
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
     title={<h2 className=" view ml-2">Job Role Details</h2>}
     >
     <ViewEmpJobRole onHide={()=>{setShow(false)}}  item={value}/>
     </FormModel>
     
  </div>
  )
}

export default EmpJobRole