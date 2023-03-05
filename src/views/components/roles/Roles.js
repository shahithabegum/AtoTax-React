import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
//import {useNavigate} from 'react-router-dom'
// import { FaEdit } from "react-icons/fa";
// import { BsEye } from "react-icons/bs";
import {GetRoles} from '../../../service/RolesService'
const Roles = () => {
  
        // let navigate = useNavigate();
        const columns = [
          
          // {title: "Id", field:"id"},
          {title: "Normalized Name", field:"normalizedName"},
          {title: "Concurrency Stamp", field:"concurrencyStamp"},
        ]
          const [user, setUser] = useState([])
          useEffect(() => {
           GetDetails();
          }, [])
          //getting client details
          const GetDetails = ()=>{
            GetRoles().then(res=>setUser(res.data.result));
          }
    //       const GoEdit = (item)=>{
    //         console.log(props , item)
    //         navigate('/updateuser', { state: item })
    //     }
    //     const GoView = (item)=>{
    //       console.log(props , item)
    //       navigate('/viewuser', { state: item })
    //   }
    //     const deleteUser = (item)=>{
    //       DeleteUser(item.id).then(res=>{
            
    //       })
    //       console.log("id check",item.id)
    //       }
      
    //     console.log("Addresstype",user)
        
        return (
          <div className='Table-div'>
            <div className='headcontainer'>
              <h2 className="Tableheading ml-1">Roles</h2>
            </div>
      
        <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
              <MaterialTable
                 title="Roles"
                 data={user}
                 columns={columns}
                //  actions={[
                //   rowData=>({icon: ()=><FaEdit style={{color:"green"}}/>,
                //   tooltip: 'edit User',
                //   onClick:(event,rowData)=>GoEdit(rowData)
                //   }),
                //   rowData=>({icon: ()=><BsEye style={{color:"blue"}}/>,
                //   tooltip: 'view User',
                //   onClick:(event,rowData)=>GoView(rowData)
                //   }),
                //   rowData=>( {
                //     icon: 'delete',
                //     iconProps: { color: 'secondary' },
                //     tooltip: 'dalete User',
                //     onClick:(event,rowData)=>deleteUser(rowData)
                //   }),
                // ]}
                options={{
                  exportButton: true,
                  actionsColumnIndex: -1,
                
                }}
                
              />
            </div>
          
        </div>
        )
}

export default Roles