import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {useNavigate,Link} from 'react-router-dom'
import {GetBillAndFee,Delete_BillAndFee}from "../../../service/BIllAndFeeCollectionService"
import { FaEdit } from "react-icons/fa";
import ViewBillAndFeeCollection from './ViewBillAndFeeCollection'
import {FormModel} from '../../../shared/FormModel'
import { BsEye } from "react-icons/bs";
import { toast } from 'react-toastify';

const BillAndFeeCollection = (props) => {
    const [billAndFee, setBillAndFee] = useState([])
    // const [show, setShow] = useState(false);
    // const [value, setValue] = useState({});
    useEffect(() => {
     GetDetails();
    }, [])
    let navigate = useNavigate();
  
    const columns = [
     
      {title: "Proprietor Name", field:"gstClient.proprietorName"},
      {title: "Due Month", field:"dueMonth"},
      {title: "Due Year", field:"dueYear"},
      {title: "Bills Received", field:"isBillsReceived",render : rowData=>{
        return(
          rowData.isBillsReceived === true ? <div><i class="fa fa-check" aria-hidden="true" style={{fontSize:"20px",textAlign:"center",color:'green'
        }}></i></div> : <div><i class="fa fa-close" aria-hidden="true" style={{fontSize:"20px",textAlign:"center",color:'red'
      }}></i></div>
        )
      }},
      {title: "GST Filed", field:"isFiled",render : rowData=>{
        return(
          rowData.isFiled === true ? <div><i class="fa fa-check" aria-hidden="true" style={{fontSize:"20px",textAlign:"center",color:'green'
        }}></i></div> : <div><i class="fa fa-close" aria-hidden="true" style={{fontSize:"20px",textAlign:"center",color:'red'
      }}></i></div>
        )
      }},
      
    ]
      //getting client details
      const GetDetails = ()=>{
        GetBillAndFee().then(res=>setBillAndFee(res.data.result));
      }
      const GoEdit = (item)=>{
        console.log(props , item)
        navigate('/ViewBillAndFeeCollection', { state: item })
    }
    // const deleteBillAndFeeCollection = (item)=>{
    //     Delete_BillAndFee(item.id).then(res=>{
    //       if(res?.data?.isSuccess){
    //         toast.error(res.data.successMessage)
    //         GetDetails()
    //       }else{
    //         toast.error(res.data.errorMessages.toString())
    //       }
    //   })
    //   }
  
  console.log("BillAndFee",billAndFee)
    
    return (
       
            <div className='Table-div'>
              <div className='headcontainer'>
                <h2 className="Tableheading ml-1">GST Bills Processing</h2>
                <Link to="/CreateBillAndFeeCollection"> <button className='btn btn-success ml-0  mt-2 m-0' >Add</button></Link>
                {/* <button className='btn btn-success ml-1  mt-2 ml-3' onClick={()=>setShowAdd(true)} >Add</button> */}
              </div>
        
          <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
                <MaterialTable
                   title="Bills Processing"
                   data={billAndFee}
                   columns={columns}
                   actions={[
                    // rowData=>({icon: ()=><FaEdit style={{color:"green"}}/>,
                    // tooltip: 'edit User',
                    // onClick:(event,rowData)=>GoEdit(rowData)
                    // }),
                    rowData=>({icon: ()=><BsEye style={{color:"blue"}}/>,
                    tooltip: 'view User',
                    onClick:(event,rowData)=>GoEdit(rowData)
                    }),
                    // rowData=>( {
                    //   icon: 'delete',
                    //   iconProps: { color: 'secondary' },
                    //   tooltip: 'dalete User',
                    //   onClick:(event,rowData)=>deleteBillAndFeeCollection(rowData)
                    // }),
                  ]}
                  options={{
                    exportButton: true,
                    actionsColumnIndex: -1,
                  
                  }}
                  
                />
              </div>
        {/* <FormModel 
       show={show}
       onHide={()=>{setShow(false)}}
       title={<h2 className=" view ml-2">Bill And Fee Collection</h2>}
       >
       <ViewBillAndFeeCollection onHide={()=>{setShow(false)}}  item={value}/>
       </FormModel> */}
    </div>
    )
}

export default BillAndFeeCollection