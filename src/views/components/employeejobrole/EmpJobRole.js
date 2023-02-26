import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import {GetEmpJobRole,DeleteEmpJobRole} from '../../../service/EmpJobRoleService'
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
const EmpJobRole = (props) => {
  const [amendType, setAmendType] = useState([])
  useEffect(() => {
   GetDetails();
  }, [])
  let navigate = useNavigate();

  const columns = [
    {title: "Job Id", field:"id"},
    {title: "Job Role", field:"jobRole"},
    {title: "Created Date", field:"createdDate"},
  
  ]
    //getting client details
    const GetDetails = ()=>{
      GetEmpJobRole().then(res=>setAmendType(res.data.result));
    }
    const GoEdit = (item)=>{
      console.log(props , item)
      navigate('/editEmpJobRole', { state: item })
  }
  const GoView = (item)=>{
    console.log(props , item)
    navigate('/viewEmpJobRole', { state: item })
}
  const deleteJob = (item)=>{
    DeleteEmpJobRole(item.id).then(res=>{
      GetDetails();
    })
    }

console.log("AmendType",amendType)
  
  return (
    <div className='Table-div'>
      <div className='headcontainer'>
        <h2 className="Tableheading ml-1">Employee Job Role</h2>
        <Link to="/addEmpJobRole"> <button className='btn btn-success ml-1  mt-2 m-0' >Add</button></Link>
      </div>

  <div style={{ maxWidth: '100%' }} className='container mt-2 mx-0'>
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
            onClick:(event,rowData)=>GoView(rowData)
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
      
     
  </div>
  )
}

export default EmpJobRole