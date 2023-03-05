import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {useNavigate} from 'react-router-dom'
import {GetAmendTypes}from "../../../service/AmendTypesServices"
//import { FaEdit } from "react-icons/fa";
import ViewAmendType from './ViewAmendType'
import {FormModel} from '../../../shared/FormModel'
import { BsEye } from "react-icons/bs";
const AmendType = (props) => {
  const [amendType, setAmendType] = useState([])
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({});
  useEffect(() => {
   GetDetails();
  }, [])
  let navigate = useNavigate();

  const columns = [
   
    {title: "Amend Id", field:"id"},
    {title: "Amend Type", field:"amendTypeName"},
    {title: "Status Type", field:"status.statusType"},
    
  ]
    //getting client details
    const GetDetails = ()=>{
      GetAmendTypes().then(res=>setAmendType(res.data.result));
    }
  //   const GoEdit = (item)=>{
  //     console.log(props , item)
  //     navigate('/UpdateAmendType', { state: item })
  // }
  // const deleteAmendments = (item)=>{
  //   DeleteAmendType(item.id).then(res=>{
  //     GetDetails();
  //   })
  //   }

console.log("AmendType",amendType)
  
  return (
    <div className='Table-div'>
      <div className='headcontainer'>
        <h2 className="Tableheading ml-1">AmendType</h2>
      
      </div>

  <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
        <MaterialTable
         title="AmendType"
           data={amendType}
           columns={columns}
           actions={[
            // rowData=>({icon: ()=><FaEdit style={{color:"green"}}/>,
            // tooltip: 'edit User',
            // onClick:(event,rowData)=>GoEdit(rowData)
            // }),
            rowData=>({icon: ()=><BsEye style={{color:"blue"}}/>,
            tooltip: 'view User',
            onClick:(event,rowData)=>{ setValue(rowData)
            setShow(true)}
            }),
            // rowData=>( {
            //   icon: 'delete',
            //   iconProps: { color: 'secondary' },
            //   tooltip: 'dalete User',
            //   onClick:(event,rowData)=>deleteAmendments(rowData)
            // }),
          ]}
          options={{
            //exportButton: true,
            actionsColumnIndex: -1,
          
          }}
          
        />
         
      </div>
      <FormModel 
     show={show}
     onHide={()=>{setShow(false)}}
     title={<h2 className=" view ml-2">Amend Type</h2>}
     >
     <ViewAmendType onHide={()=>{setShow(false)}}  item={value}/>
     </FormModel>
  </div>
  )
  
}

export default AmendType