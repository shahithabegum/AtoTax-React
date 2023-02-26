import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import {GetMedia,DeletMedia} from '../../../service/MediaTypeService'
const MediaTypes = (props) => {
  let navigate = useNavigate();
  const columns = [
    
    {title: "Media", field:"media"},
    {title: "Description", field:"description"},
    {title: "Created Date", field:"createdDate"},
    {title: "Status Id", field:"status.statusType"},
  ]
    const [media, setMedia] = useState([])
    useEffect(() => {
     GetDetails();
    }, [])
    //getting client details
    const GetDetails = ()=>{
      GetMedia().then(res=>setMedia(res.data.result));
    }
    const GoEdit = (item)=>{
      console.log(props , item)
      navigate('/updatemedia', { state: item })
  }
  const GoView = (item)=>{
    console.log(props , item)
    navigate('/mediaview', { state: item })
}
  const DeleteMediaType = (item)=>{
    DeletMedia(item.id).then(res=>{
      GetDetails();
    })
    }

 
  return (
    <div className='Table-div'>
      <div className='headcontainer'>
        <h2 className="Tableheading ml-1">Media Types</h2>
        <Link to="/createmedia"> <button className='btn btn-success ml-1  mt-2 mx-1' >Add</button></Link>
        {/* <button className='btn btn-success ml-1  mt-2 ml-3' onClick={()=>setShowAdd(true)} >Add</button> */}
      </div>

  <div style={{ maxWidth: '100%' }} className='container mt-2 ml-0'>
        <MaterialTable
           title="Media Types"
           data={media}
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
              onClick:(event,rowData)=>DeleteMediaType(rowData)
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

export default MediaTypes