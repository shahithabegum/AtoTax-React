
    import React from 'react'
    const ViewAdressType = ({item}) => {
        console.log("viewaddress",item)
        const CreatedDate=item.createdDate
         var CreatedlocalDate = new Date(CreatedDate).toLocaleDateString();
         const ModifiedDate=item.lastModifiedDate
         var ModifiedlocalDate = new Date(ModifiedDate).toLocaleDateString();
       
        return (
        
            <div className='container' >
                
        
                <div className='displaylist mt-2 ml-0 m-auto p-5'>
        <table class="view-table table table-responsive ml-0 w-full m-auto ">
                <tbody className='view-table-body '>
                    <tr className='view-row' >
                        <td className='tilte-td'><b>AddressType Name</b></td>
                        <td  className='tilte-td'><b>: </b>{item.addressTypeName}</td>
                    </tr>
                    <tr>
                        <td  className='tilte-td'><b>AddressType Desc</b></td>
                        <td  className='tilte-td'><b>: </b>{item.addressTypeDesc}</td>
                    </tr>
                    <tr>
                        <td  className='tilte-td'><b>Status</b></td>
                        <td  className='tilte-td'><b>: </b>{item.status.statusType}</td>
                    </tr>
                    <tr>
                        <td  className='tilte-td'><b>Created Date</b></td>
                        <td  className='tilte-td'><b>: </b>{CreatedlocalDate}</td>
                    </tr><tr>
                        <td  className='tilte-td'><b>Last Modified Date</b></td>
                        <td  className='tilte-td'><b>: </b>{ModifiedlocalDate}</td>
                    </tr>
                
                </tbody>
                </table>
                </div>
              
                </div>
        )
    }

    export default ViewAdressType