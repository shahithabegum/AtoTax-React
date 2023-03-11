import React ,{useState} from 'react'
import './Sidenav.scss'
//import { Scrollbars } from 'react-custom-scrollbars';
import { SidenavData } from './SidenavData'
import SidenavItem from './SidenavItem'
const Sidenav = () => {
  const [activeNum, setActiveNum] = useState([])
  const dropdownopen = (position)=>{
    let timeout,areadytake=false;
    if(activeNum.includes(position)){
       let filterdata = activeNum.filter(item=>item!=position)
       areadytake=true
       setActiveNum([...filterdata])
    }else{
      setActiveNum([position])
      // setOpen(!open)
    //  timeout =  setTimeout(()=>{setActiveNum([position])},5000)
    }
    //  if(areadytake)
    //  {
    //   clearTimeout(timeout)
    //   console.log("activenum",activeNum)
    //  setTimeout(()=>{setActiveNum(activeNum.length>0?[activeNum[activeNum.length-1]]:[])},5000)
    //  }
  }


  return (
    
    <div className='container-fluid p-0'>
        
     {SidenavData.map((item,index)=>(<SidenavItem key={index} position={index} dropdownopen={dropdownopen} activenumber={activeNum} item={item}/>))}
          
  </div>
  
  )
}

export default Sidenav