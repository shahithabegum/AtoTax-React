import React from 'react'


const ViewGstClientAddressEx = ({item}) => {
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
                    <td  className='tilte-td'><b>GST Client</b></td>
                    <td  className='tilte-td'><b>: </b>{item.gstClient.proprietorName}</td>
                    <td  className='tilte-td'><b>Address Type</b></td>
                    <td  className='tilte-td'><b>: </b>{item.addressType.addressTypeName}</td>
                </tr>
                <tr>
                    <td  className='tilte-td'><b>Address Line 1</b></td>
                    <td  className='tilte-td'><b>: </b>{item.addressLine1}</td>
                    <td  className='tilte-td'><b>City</b></td>
                    <td  className='tilte-td'><b>: </b>{item.city}</td>
                </tr>
                <tr>
                    <td  className='tilte-td'><b>AddressLine 2</b></td>
                    <td  className='tilte-td'><b>: </b>{item.addressLine2}</td>
                    <td  className='tilte-td'><b>District</b></td>
                    <td  className='tilte-td'><b>: </b>{item.district}</td>
                </tr>
                <tr>
                    <td  className='tilte-td'><b>Address Line 3</b></td>
                    <td  className='tilte-td'><b>: </b>{item.addressLine3}</td>
                    <td  className='tilte-td'><b>State</b></td>
                    <td  className='tilte-td'><b>: </b>{item.state}</td>
                </tr>
                <tr><td  className='tilte-td'><b>Status</b></td>
                    <td  className='tilte-td'><b>: </b>{item.status.statusType}</td>
                    <td  className='tilte-td'><b>Pincode</b></td>
                    <td  className='tilte-td'><b>: </b>{item.pincode}</td>
                </tr>
                <tr>
                        <td  className='tilte-td'><b>Created Date</b></td>
                        <td  className='tilte-td'><b>: </b>{CreatedlocalDate}</td>
            
                        <td  className='tilte-td'><b>LastModified Date</b></td>
                        <td  className='tilte-td'><b>: </b>{ModifiedlocalDate}</td>
                    </tr>
               
               </tbody>
               </table>
               
            </div>
        </div>
      )
  
}

export default ViewGstClientAddressEx