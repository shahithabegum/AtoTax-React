import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import {GetServiceCategory,DeleteServiceCategory} from '../../../service/ServiceCategoryService'
import {FormModel} from '../../../shared/FormModel'
import ViewServiceCat from './ViewServiceCat'
import { toast } from 'react-toastify';
const ServiceCat = (props) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({});
    let navigate = useNavigate();
    const columns = [
      
      {title: "ID", field:"id"},
      {title: "Service Name ", field:"serviceName"},
      {title: "Fixed Charge", field:"fixedCharge"},
      {title: "Status", field:"status.statusType"},
    ]
      const [service, setService] = useState([])
      useEffect(() => {
       GetDetails();
      }, [])
      //getting client details
      const GetDetails = ()=>{
        GetServiceCategory().then(res=>setService(res.data.result));
      }
      const GoEdit = (item)=>{
        console.log(props , item)
        navigate('/editSeriveCat', { state: item })
    }
   
    const deleteService = (item)=>{
        DeleteServiceCategory(item.id).then(res=>{
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
            <h2 className="Tableheading ml-1">Service Category Types</h2>
            <Link to="/addServiceCat"> <button className='btn btn-success ml-1  mt-2 ml-2' >Add</button></Link>
          </div>
    
      <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
            <MaterialTable
               title="GSTFiling"
               data={service}
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
                  onClick:(event,rowData)=>deleteService(rowData)
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
     title={<h2 className=" view ml-2">Service Category Details</h2>}
     >
     <ViewServiceCat onHide={()=>{setShow(false)}}  item={value}/>
     </FormModel>
      </div>
      )
}

export default ServiceCat