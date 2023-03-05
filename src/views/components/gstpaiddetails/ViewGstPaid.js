import React from 'react'

const ViewGstPaid = ({item}) => {
  const settledDate=item.settledDate
  var SettledDate = new Date(settledDate).toLocaleDateString();
  return (
    <div className='container' >
                
        
    <div className='displaylist mt-2 ml-0 m-auto p-5'>
<table class="view-table table table-responsive ml-0 w-full m-auto ">
    <tbody className='view-table-body '>
        <tr className='view-row' >
            <td className='tilte-td'><b>Proprietor Name</b></td>
            <td  className='tilte-td'><b>: </b>{item.gstClient.proprietorName}</td>
        </tr>
        <tr>
            <td  className='tilte-td'><b>Service Name</b></td>
            <td  className='tilte-td'><b>: </b>{item.serviceCategory.serviceName}</td>
        </tr>
        <tr>
            <td  className='tilte-td'><b>Payment Method</b></td>
            <td  className='tilte-td'><b>: </b>{item.paymentType.paymentMethod}</td>
        </tr>
        <tr>
            <td  className='tilte-td'><b>Amount</b></td>
            <td  className='tilte-td'><b>: </b>{item.amount}</td>
        </tr>
        <tr>
            <td  className='tilte-td'><b>Payment Due Month</b></td>
            <td  className='tilte-td'><b>: </b>{item.paymentDueMonth}</td>
        </tr>
        <tr>
            <td  className='tilte-td'><b>Payment Due Year</b></td>
            <td  className='tilte-td'><b>: </b>{item.paymentDueYear}</td>
        </tr>
        <tr>
            <td  className='tilte-td'><b>Settled Date</b></td>
            <td  className='tilte-td'><b>: </b>{SettledDate}</td>
        </tr>
        <tr>
            <td  className='tilte-td'><b>isPending</b></td>
            <td  className='tilte-td'><b>: </b>{item.isPending}</td>
        </tr>
    </tbody>
    </table>
    </div>
  
    </div>
)
  
}

export default ViewGstPaid