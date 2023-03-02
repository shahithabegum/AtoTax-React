    import { CloudDone } from '@material-ui/icons'
    import React, { useEffect, useState } from 'react'
    import {useLocation,Link} from 'react-router-dom'
    
    const ViewAdressType = ({item}) => {
        // const [item, setItem] = useState()
        const location = useLocation()
        // useEffect(() => {
        //     setItem(location.state)
        
        // }, [])
        console.log("viewaddress",item)
        return (
        
            <div className='view-container w-full' >
                
        
                <div className='displaylist m-0  w-full'>
                <table class="table  table-responsive ml-0 w-full ">
                <tbody className='w-full col-12'>
                    <tr className='col-lg-12'>
                        <td className='col-lg-12'><b>AddressType Name</b></td>
                        <td>{item.addressTypeName}</td>
                    </tr>
                    <tr>
                        <td><b>AddressType Desc</b></td>
                        <td>{item.addressTypeDesc}</td>
                    </tr>
                    <tr>
                        <td><b>Status</b></td>
                        <td>{item.status.statusType}</td>
                    </tr>
                    <tr>
                        <td><b>Created Date</b></td>
                        <td>{item.createdDate}</td>
                    </tr><tr>
                        <td><b>LastModified Date</b></td>
                        <td>{item.lastModifiedDate}</td>
                    </tr>
                
                </tbody>
                </table>
                {/* <p className='text-center col-lg-12 col-md-12 col-sm-12'><b>AddressType Name :</b> {item.addressTypeName}</p>
                <p className='text-center'><b> AddressType Desc :</b> {item.addressTypeDesc}</p>
               <p className='text-center'><b>Status :</b> {item.status.statusType}</p>
               <p className='text-center'><b>Created Date:</b> {item.createdDate}</p>
               <p className='text-center'><b>LastModified Date :</b> {item.lastModifiedDate}</p> */}
                </div>
              
                </div>
        )
    }

    export default ViewAdressType