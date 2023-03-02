import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import {GetUser,DeleteUser} from '../../../service/UserService'
import { toast } from 'react-toastify';
const User = (props) => {
    let navigate = useNavigate();
    const columns = [
      
      {title: "Employee Id", field:"employeeId"},
      {title: "User Name", field:"userName"},
      {title: "Email", field:"email"},
      {title: "Phone Number", field:"phoneNumber"},
    ]
      const [user, setUser] = useState([])
      useEffect(() => {
       GetDetails();
      }, [])
      //getting client details
      const GetDetails = ()=>{
        GetUser().then(res=>setUser(res.data.result));
      }
      const GoEdit = (item)=>{
        console.log(props , item)
        navigate('/updateuser', { state: item })
    }
    const GoView = (item)=>{
      console.log(props , item)
      navigate('/viewuser', { state: item })
  }
    const deleteUser = (item)=>{
      DeleteUser(item.id).then(res=>{
        if(res?.data?.isSuccess){
          toast.error(res.data.successMessage)
          GetDetails()
        }else{
          toast.error(res.data.errorMessages.toString())
        }
      })
      console.log("id check",item.id)
      }
  
    console.log("Addresstype",user)
    
    return (
      <div className='Table-div'>
        <div className='headcontainer'>
          <h2 className="Tableheading ml-1">User Details</h2>
        </div>
  
    <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
          <MaterialTable
             title="User Details"
             data={user}
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
                onClick:(event,rowData)=>deleteUser(rowData)
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

export default User