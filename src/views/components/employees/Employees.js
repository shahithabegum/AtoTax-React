import React ,{useState,useEffect} from 'react'
import { GetEmployees , DeleteEmployee } from '../../../service/EmployeeService'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { toast } from 'react-toastify';
import ViewEmployees from './ViewEmployees'
import {FormModel} from '../../../shared/FormModel'
const Employees = (props) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({});
  useEffect(() => {
    GetDetails();
   }, [])
  let navigate = useNavigate();
  const [list, setList] = useState([])
  const columns = [
    
    {title: "First Name", field:"firstName"},
    {title: "Last Name", field:"lastName"},
    {title: "Job Role", field:"empJobRole.jobRole"},
    {title: "Email", field:"email"},
    {title: "Status", field:"status.statusType"}
  ]
   
    
    //getting client details
    const GetDetails = ()=>{
      GetEmployees().then((res)=>{setList(res.data.result)
       })
    }
    const GoEdit = (item)=>{
      console.log(props , item)
      navigate('/updateEmployees', { state: item })
  }
  const deleteEmployee = (item)=>{
    console.log(props , item)
    DeleteEmployee(item.id).then((res)=>{
      if(res?.data?.isSuccess){
        toast.error(res.data.successMessage)
        GetDetails()
      }else{
        toast.error(res.data.errorMessages.toString())
      }
    })
}

  console.log("list for table",list.doj)
 
  return (
    <div className='Table-div'>
      <div className='headcontainer my-2'>
        <h2 className="Tableheading ml-1">Employee details</h2>
        <Link to="/createEmployees"> <button className='btn btn-success ml-1  mt-2 mt-2' >Add</button></Link>
        
      </div>

  <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
        <MaterialTable
           title="Employee"
           data={list}
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
              onClick:(event,rowData)=>deleteEmployee(rowData)
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
     title={<h2 className=" view ml-2">Employee Details</h2>}
     >
     <ViewEmployees onHide={()=>{setShow(false)}}  item={value}/>
     </FormModel>
  </div>
  )
}

export default Employees