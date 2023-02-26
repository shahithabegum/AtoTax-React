import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import  {GetStatus} from '../../../service/StatusService'
const Status = (props) => {
  let navigate = useNavigate();
  const columns = [
    {title: "StatusId", field:"id"},
    {title: "statusType", field:"statusType"},
  
   
  ]
    const [status, setStatus] = useState([])
    useEffect(() => {
     GetDetails();
    }, [])
    //getting client details
    const GetDetails = ()=>{
      GetStatus().then(res=>setStatus(res.data.result));
    }
   
    
    return (
      <div className='Table-div'>
        <div className='headcontainer'>
          <h2 className="Tableheading ml-1">Status</h2>
          <Link to="/addStatus"> <button className='btn btn-success ml-1  mt-2 ml-2' >Add</button></Link>
          
        </div>
  
    <div style={{ maxWidth: '100%' }} className='Table-div mt-2 ml-2'>
          <MaterialTable
             title="Status"
             data={status}
             columns={columns}
            options={{
              exportButton: true,
              actionsColumnIndex: -1,
            
            }}
            
          />
        </div>
        
    </div>
    )
}

export default Status