import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import {GetServiceHistory} from '../../../service/ServiceChargeUpdate'
import {FormModel} from '../../../shared/FormModel'
import ServiceHistoryView from './ServiceHistoryView'
const ServiceHistory = (props) => {
    let navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [value, setValue] = useState({});
    const columns = [
      
        {title: "Proprietor Name", field:"gstClient.proprietorName"},
        {title: "Service Name", field:"serviceCategory.serviceName"},
        {title: "Previous Rate", field:"previousRate"},
        {title: "New Rate", field:"newRate"},
        {title: "Amended Date", field:"amendedDate",render : rowData=>{
          return(
          rowData.amendedDate=new Date( rowData.amendedDate).toLocaleDateString()
          )
        }},
       
      ]
        const [service, setService] = useState([])
        useEffect(() => {
         GetDetails();
        }, [])
        //getting client details
        const GetDetails = ()=>{
            GetServiceHistory().then(res=>setService(res.data.result));
        }
    //     const GoEdit = (item)=>{
    //       console.log(props , item)
    //       navigate('/editSeriveCat', { state: item })
    //   }
    //   const GoView = (item)=>{
    //     console.log(props , item)
    //     navigate('/viewServicehistory', { state: item })
    // }
    //   const deleteService = (item)=>{
    //       DeleteServiceCategory(item.id).then(res=>{
    //       GetDetails();
    //     })
    //     }
    
        return (
          <div className='Table-div'>
            <div className='headcontainer'>
              <h2 className="Tableheading ml-1">Service Charge Update History</h2>
            </div>
      
        <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
              <MaterialTable
                 title="Updated History"
                 data={service}
                 columns={columns}
                 actions={[
                //   rowData=>({icon: ()=><FaEdit style={{color:"green"}}/>,
                //   tooltip: 'edit User',
                //   onClick:(event,rowData)=>GoEdit(rowData)
                //   }),
                rowData=>({icon: ()=><BsEye style={{color:"blue"}}/>,
                tooltip: 'view User',
                onClick:(event,rowData)=>{ setValue(rowData)
                setShow(true)}
                }),
                //   rowData=>( {
                //     icon: 'delete',
                //     iconProps: { color: 'secondary' },
                //     tooltip: 'dalete User',
                //     onClick:(event,rowData)=>deleteService(rowData)
                //   }),
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
     title={<h2 className=" view ml-2">Service Charge Update History</h2>}
     >
     <ServiceHistoryView onHide={()=>{setShow(false)}}  item={value}/>
     </FormModel>
        </div>
        )
}

export default ServiceHistory