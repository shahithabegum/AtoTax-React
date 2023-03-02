import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import {GetGstFilingType,DeleteGstFilingType} from '../../../service/GstFilingTypesService'
import { toast } from 'react-toastify';
const GstFilingTypes = (props) => {
  let navigate = useNavigate();
  const columns = [
    
    {title: "ID", field:"id"},
    {title: "Filing Type", field:"filingType"},
    {title: "Status", field:"status.statusType"},
  ]
    const [address, setAddress] = useState([])
    useEffect(() => {
     GetDetails();
    }, [])
    //getting client details
    const GetDetails = ()=>{
      GetGstFilingType().then(res=>setAddress(res.data.result));
    }
    const GoEdit = (item)=>{
      console.log(props , item)
      navigate('/editGstFiling', { state: item })
  }
  const GoView = (item)=>{
    console.log(props , item)
    navigate('/viewGstFiling', { state: item })
}
  const deleteGstFiling = (item)=>{
    DeleteGstFilingType(item.id).then(res=>{
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
          <h2 className="Tableheading ml-1 my-1">GST Filing Types</h2>
          <Link to="/addGstFiling"> <button className='btn btn-success ml-1  mt-1 ml-1' >Add</button></Link>
          {/* <button className='btn btn-success ml-1  mt-2 ml-3' onClick={()=>setShowAdd(true)} >Add</button> */}
        </div>
  
    <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
          <MaterialTable
          className="table-container"
             title="GSTFiling"
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
                onClick:(event,rowData)=>deleteGstFiling(rowData)
              }),
            ]}
            options={{
              exportButton: true,
              actionsColumnIndex: -1,
            
            }}
            
          />
        </div>
        
        {/* <FormModel
                          show={showAdd}
                          onHide={() =>setShowAdd(false)}
                          submitButtonText={'CREATE'}
                          title={'Create Gst'}
                      >
                          <GstForm onHide={() =>setShowAdd(false)  } />
                      </FormModel> */}
                      {/* <FormModel
                          show={showEdit}
                          onHide={() =>setShowAdd(false)}
                          submitButtonText={'CREATE'}
                          title={'Create Gst'}
                      >
                          <GstEditing onHide={() =>setShowAdd(false)  } />
                      </FormModel> */}
    </div>
    )
}

export default GstFilingTypes