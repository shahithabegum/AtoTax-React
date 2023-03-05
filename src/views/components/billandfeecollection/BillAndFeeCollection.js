import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {useNavigate,Link} from 'react-router-dom'
import {GetBillAndFee,Delete_BillAndFee}from "../../../service/BIllAndFeeCollectionService"
import { FaEdit } from "react-icons/fa";
import ViewBillAndFeeCollection from './ViewBillAndFeeCollection'
import {FormModel} from '../../../shared/FormModel'
import { BsEye } from "react-icons/bs";

const BillAndFeeCollection = (props) => {
    const [billAndFee, setBillAndFee] = useState([])
    const [show, setShow] = useState(false);
    const [value, setValue] = useState({});
    useEffect(() => {
     GetDetails();
    }, [])
    let navigate = useNavigate();
  
    const columns = [
     
      {title: "Amend Id", field:"id"},
      {title: "Amend Type", field:"BillAndFeeName"},
      {title: "Status Type", field:"status.statusType"},
      
    ]
      //getting client details
      const GetDetails = ()=>{
        GetBillAndFee().then(res=>setBillAndFee(res.data.result));
      }
      const GoEdit = (item)=>{
        console.log(props , item)
        navigate('/UpdateBillAndFeeCollection', { state: item })
    }
    const deleteBillAndFeeCollection = (item)=>{
        Delete_BillAndFee(item.id).then(res=>{
        GetDetails();
      })
      }
  
  console.log("BillAndFee",billAndFee)
    
    return (
       
            <div className='Table-div'>
              <div className='headcontainer'>
                <h2 className="Tableheading ml-1">Bill And Fee Collection</h2>
                <Link to="/CreateBillAndFeeCollection"> <button className='btn btn-success ml-0  mt-2 m-0' >Add</button></Link>
                {/* <button className='btn btn-success ml-1  mt-2 ml-3' onClick={()=>setShowAdd(true)} >Add</button> */}
              </div>
        
          <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
                <MaterialTable
                   title="Bill And Fee Collection"
                   data={billAndFee}
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
                      onClick:(event,rowData)=>deleteBillAndFeeCollection(rowData)
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
       title={<h2 className=" view ml-2">Bill And Fee Collection</h2>}
       >
       <ViewBillAndFeeCollection onHide={()=>{setShow(false)}}  item={value}/>
       </FormModel>
    </div>
    )
}

export default BillAndFeeCollection