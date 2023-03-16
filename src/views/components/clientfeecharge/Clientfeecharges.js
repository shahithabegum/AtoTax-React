import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {Link,useNavigate} from 'react-router-dom'
import {GetClientFeeCharge,DeleteClientFeeCharge}from "../../../service/ClientFeeChargeSerivce"
import { FaEdit } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import {FormModel} from '../../../shared/FormModel'
import ViewFeeCharge from './ViewFeeCharge'
const Clientfeecharges = (props) => {
  const [feeCharge, setFeeCharge] = useState([])
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({});
  useEffect(() => {
   GetDetails();
  }, [])
  let navigate = useNavigate();

  const columns = [
   {title: "Proprietor Name", field:"gstClient.proprietorName",defaultGroupOrder:0},
    {title: "Return Freq Type", field:"returnFrequencyType.returnFreqType"},
    {title: "Fixed Charge", field:"returnFrequencyType.fixedCharge"},
    {title: "Current Charge", field:"defaultCharge"},
    {title: "Previous Charge", field:"returnFrequencyType.previousCharge"},
  ]
    //getting client details
    const GetDetails = ()=>{
      GetClientFeeCharge().then(res=>setFeeCharge(res.data.result));
    }
    const GoEdit = (item)=>{
      console.log(props , item)
      navigate('/editfeecharges', { state: item })
  }
 
  // const deleteFeeCharge = (item)=>{
  //   DeleteClientFeeCharge(item.id).then(res=>{
  //     GetDetails();
  //   })
  //   }
  
  return (
    <div className='Table-div'>
      <div className='headcontainer'>
        <h2 className="Tableheading ml-1">Client Fee Map</h2>
        {/* <Link to="/addfeecharges"> <button className='btn btn-success ml-1  mt-2 ml-0 mt-2 ml-2' >Add</button></Link> */}
      </div>

  <div style={{ maxWidth: '100%' }} className='container mt-2 my-2'>
        <MaterialTable
         title="Fee Map"
           data={feeCharge}
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
            // rowData=>( {
            //   icon: 'delete',
            //   iconProps: { color: 'secondary' },
            //   tooltip: 'dalete User',
            //   onClick:(event,rowData)=>deleteFeeCharge(rowData)
            // }),
          ]}
          options={{
            exportButton: true,
            actionsColumnIndex: -1,
            grouping:true
          }}
          
        />
         
      </div>
      <FormModel 
     show={show}
     onHide={()=>{setShow(false)}}
     title={<h2 className=" view ml-2">Client Fee Map</h2>}
     >
     <ViewFeeCharge onHide={()=>{setShow(false)}}  item={value}/>
     </FormModel>
  </div>
  )
}

export default Clientfeecharges