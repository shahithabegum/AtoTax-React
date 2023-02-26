import React ,{useState,useEffect}from 'react'
import {GetStatus} from '../service/StatusService'
const Select = (props) => {
    const [status,setStatus] =useState([])
 

    useEffect(()=>{
      getStatus()
    },[])
    const getStatus =()=>{
        GetStatus().then(res=>{
          console.log(res)
          if(res.status)
            setStatus(res.data.result)
        })
      }
  return (
   <table className=' w-full col-12 '>
    <tr className='col-12'>
      <td className='col-4 text-right'>
      <label htmlFor="Statusid" className='ml-5'>
               Status<span style={{color:'red',fontSize:'20px'}}>*</span>
              </label>
      </td>
      <td>
      <select className='form-Control col-lg-12 '
      
                name="Statusid"
                type="number"
               >
                  
               {status.map(item=>(
                <option value={item.id} label={item.statusType} />
                ))}
              </select>
      </td>
    </tr>
   </table>
  )
}

export default Select