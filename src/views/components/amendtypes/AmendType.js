import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {useNavigate} from 'react-router-dom'
import {GetAmendTypes}from "../../../service/AmendTypesServices"
//import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
const AmendType = (props) => {
  const [amendType, setAmendType] = useState([])
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
  const GoView = (item)=>{
    console.log(props , item)
    navigate('/ViewAmendType', { state: item })
}
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
        {/* <Link to="/createadmend"> <button className='btn btn-success ml-1  mt-2 ml-2 mt-2' >Add</button></Link> */}
        {/* <button className='btn btn-success ml-1  mt-2 ml-3' onClick={()=>setShowAdd(true)} >Add</button> */}
      </div>

  <div style={{ maxWidth: '100%' }} className='container mt-2 mx-0'>
        <MaterialTable
         title="AmendType"
           data={amendType}
           columns={columns}
           actions={[
            // rowData=>({icon: ()=><FaEdit style={{color:"green"}}/>,
            // tooltip: 'edit User',
            // onClick:(event,rowData)=>GoEdit(rowData)
            // }),
            rowData=>({icon: ()=><BsEye style={{color:" #3949AB"}}/>,
            tooltip: 'view User',
            onClick:(event,rowData)=>GoView(rowData)
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
      
  </div>
  )
  
}

export default AmendType