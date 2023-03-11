import React,{useState} from 'react'
import {MdOutlineArrowDropDown } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import './Sidenav.scss'
const SidenavItem = ({position,dropdownopen,activenumber,item}) => {
    const [open, setOpen] = useState(false)
    const [activeNum, setActiveNum] = useState([])
    // const dropdownopen = (position)=>{

    //     setActiveNum([...activeNum,position])
    //    // setOpen(!open)
    //     setTimeout(()=>{
    //         //setOpen(false)
    //         setActiveNum([position])
    //         console.log(activeNum)
    //     },5000)
    // }
    console.log(position,activenumber)
    if (item.childrens) {
        return (
              
                  <div className=' p-0'>
                    
                   <div className="sidehead nav-link p-1 ml-1 " onClick={()=>{dropdownopen(position)}}>
                       <div className='mx-1 d-flex mt-2'>
                      
                       <div className='icon ml-0 '>{item.icon}</div>
                        <div className=' title ms-1 ml-3 d-none d-sm-inline'>{item.title}</div>
                       </div>
                       
                      <span className='icon'><MdOutlineArrowDropDown/></span>
                   </div>
                   {
                    activenumber.includes(position) ?   <div className="childcontent p-2 m-2 " >
                        { item.childrens.map((items,index)=>(
                            <div >
                        <NavLink to={items.path} className='nav-link  mx-2  d-flex' activeclassName='active'>
                             
                                <span  className='icon'>{items.icon}</span>
                                <div className='title ms-1 d-none d-sm-inline ml-3 '>{items.title}</div>
                             
                            </NavLink>
                            </div>))
                        }
                    
                </div> : ""
                   }
                    
                    
                </div>
              
                
             )
    }else{
      return (
        <div className="sidebar-item ml-1 ">
          <NavLink to={item.path || "#"} className="nav-link  p-2 mt-2 mx-0 d-flex" activeclassName='active'>
             <span  className='icon ml-0'>{item.icon}</span>
              <div className='title ms-1 d-none d-sm-inline ml-3 '>{item.title}</div>
              
          </NavLink>
          </div>
      )
    }   
       
}

export default SidenavItem