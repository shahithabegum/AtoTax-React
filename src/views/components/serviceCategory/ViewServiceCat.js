import React from 'react'


const ViewServiceCat = ({item}) => {

    const CreatedDate=item.createdDate
    var CreatedlocalDate = new Date(CreatedDate).toLocaleDateString();
    const ModifiedDate=item.lastModifiedDate
    var ModifiedlocalDate = new Date(ModifiedDate).toLocaleDateString();
  return (
  
    <div className='container' >
                
        
    <div className='displaylist mt-2 ml-0 m-auto p-5'>
<table class="view-table table table-responsive ml-0 w-full m-auto ">
    <tbody className='view-table-body '>
            <tr>
                <td className='tilte-td'><b>Service Name</b></td>
                <td className='tilte-td'><b>: </b>{item.serviceName}</td>
            </tr>
            
            <tr>
                <td className='tilte-td'><b>Description</b></td>
                <td className='tilte-td'><b>: </b>{item.description}</td>
            </tr>
            <tr>
                <td className='tilte-td'><b>Fixed Charge</b></td>
                <td className='tilte-td'><b>: </b>{item.fixedCharge}</td>
            </tr>
            <tr>
                <td className='tilte-td'><b>Previous Charge</b></td>
                <td className='tilte-td'><b>: </b>{item.previousCharge}</td>
            </tr>
            <tr>
                <td className='tilte-td'><b>Status ID</b></td>
                <td className='tilte-td'><b>: </b>{item.statusId}</td>
            </tr>
            <tr>
                <td className='tilte-td'><b>Service Name</b></td>
                <td className='tilte-td'><b>: </b>{item.serviceName}</td>
            </tr>
            <tr>
                <td className='tilte-td'><b>Status Type</b></td>
                <td className='tilte-td'><b>: </b>{item.status.statusType}</td>
            </tr>
            <tr>
                <td className='tilte-td'><b>LastModified Date</b></td>
                <td className='tilte-td'><b>: </b>{item.lastModifiedDate}</td>
            </tr>
           
           </tbody>
           </table>
        </div>
    </div>
  )
}

export default ViewServiceCat