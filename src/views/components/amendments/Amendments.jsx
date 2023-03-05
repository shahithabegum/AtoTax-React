import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {GetAmendments,DeleteAmendments} from '../../../service/AmendmentsService'
import {Link,useNavigate} from 'react-router-dom'
import { BsEye } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import ViewAmendments from './ViewAmendments'
import {FormModel} from '../../../shared/FormModel'
const Amendments = (props) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({});
  let navigate = useNavigate();
  const columns = [
    {title: "Client Name", field:"gstClient.proprietorName"},
    {title: "Amend Type", field:"amendType.amendTypeName"},
    {title: "ARN", field:"arn"},
    {title: "Approval Status", field:"approvalStatusType.statusType"},
  ]
    const [amendments, setAmendments] = useState([])
    useEffect(() => {
     GetDetails();
    }, [])
    //getting client details
    const GetDetails = ()=>{
      GetAmendments().then(res=>setAmendments(res.data.result));
    }
    const GoEdit = (item)=>{
      console.log(props , item)
      navigate('/updateAmendments', { state: item })
  }
  const deleteAmendments = (item)=>{
    DeleteAmendments(item.id).then(res=>{
      if(res?.data?.isSuccess){
        toast.error(res.data.successMessage)
        GetDetails()
      }else{
        toast.error(res.data.errorMessages.toString())
      }
    })
    }


  
  return (
    <div className='Table-div'>
      <div className='headcontainer'>
        <h2 className="Tableheading ml-1">Amendments</h2>
        <Link to="/addamendments"> <button className='btn btn-success ml-0  mt-2 m-0' >Add</button></Link>
        {/* <button className='btn btn-success ml-1  mt-2 ml-3' onClick={()=>setShowAdd(true)} >Add</button> */}
      </div>

  <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
        <MaterialTable
           title="Amendnmends"
           data={amendments}
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
              onClick:(event,rowData)=>deleteAmendments(rowData)
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
     title={<h2 className=" view ml-2">Amendment Details</h2>}
     >
     <ViewAmendments onHide={()=>{setShow(false)}}  item={value}/>
     </FormModel>
  </div>
  )
  
}

export default Amendments