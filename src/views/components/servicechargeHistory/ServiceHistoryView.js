import React from 'react'

const ServiceHistoryView = ({item}) => {
  const CreatedDate=item.gstClient.createdDate
  var CreatedlocalDate = new Date(CreatedDate).toLocaleDateString();
  const ModifiedDate=item.gstClient.lastModifiedDate
  var ModifiedlocalDate = new Date(ModifiedDate).toLocaleDateString();

  return (
    <div className='container' >
                
        
                <div className='displaylist mt-2 ml-0 m-auto p-5'>
        <table class="view-table table table-responsive ml-0 w-full m-auto ">
                <tbody className='view-table-body '>
                    <tr className='view-row' >
                        <td className='tilte-td'><b>Proprietor Name</b></td>
                        <td  className='tilte-td'><b>: </b>{item.gstClient.proprietorName}</td>
                        <td  className='tilte-td'><b>GST TIN</b></td>
                        <td  className='tilte-td'><b>: </b>{item.gstClient.gstin}</td>
                    </tr>
                    <tr className='view-row' >
                        <td className='tilte-td'><b>Service Name</b></td>
                        <td  className='tilte-td'><b>: </b>{item.serviceCategory.serviceName}</td>
                        <td  className='tilte-td'><b>Description</b></td>
                        <td  className='tilte-td'><b>: </b>{item.serviceCategory.description}</td>
                    </tr>
                    <tr className='view-row' >
                        <td className='tilte-td'><b>Fixed Charge</b></td>
                        <td  className='tilte-td'><b>: </b>{item.serviceCategory.fixedCharge}</td>
                        <td  className='tilte-td'><b>Previous Charge</b></td>
                        <td  className='tilte-td'><b>: </b>{item.serviceCategory.previousCharge}</td>
                    </tr>
                    <tr>
                        <td  className='tilte-td'><b>New Rate</b></td>
                        <td  className='tilte-td'><b>: </b>{item.newRate}</td>
                        <td  className='tilte-td'><b>Status</b></td>
                        <td  className='tilte-td'><b>: </b>{item.gstClient.status}</td>
                    </tr>
                    <tr>
                        <td  className='tilte-td'><b>Created Date</b></td>
                        <td  className='tilte-td'><b>: </b>{CreatedlocalDate}</td>
                    </tr><tr>
                        <td  className='tilte-td'><b>LastModified Date</b></td>
                        <td  className='tilte-td'><b>: </b>{ModifiedlocalDate}</td>
                    </tr>
                
                </tbody>
                </table>
                </div>
              
                </div>
        )
}

export default ServiceHistoryView