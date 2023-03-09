import React from 'react'

const CollectionAndBalanceView = ({item}) => {
  return (
    <div className='container mt-5' >
          
  
    <div className='displaylist mt-2 ml-0 m-auto p-5'>
<table class="table table-responsive m-auto w-full  mt-3">
    <tbody className='view-table-body'>
        <tr>
            <td className='tilte-td'><b>Proprietor Name</b></td>
            <td  className='tilte-td'><b>: </b>{item.gstClient.proprietorName}</td>
            <td className='tilte-td'><b>GST TIN</b></td>
            <td  className='tilte-td'><b>: </b>{item.gstClient.gstin}</td>
        </tr>
        <tr>
            <td  className='tilte-td'><b>Service Name</b></td>
            <td  className='tilte-td'><b>: </b>{item.serviceCategory.serviceName}</td>
            <td  className='tilte-td'><b>Description</b></td>
            <td  className='tilte-td'><b>: </b>{item.serviceCategory.description}</td>
        </tr>
      
        <tr>
            <td  className='tilte-td'><b>Due Month</b></td>
            <td  className='tilte-td'><b>: </b>{item.dueMonth}</td>
            <td  className='tilte-td'><b>Due Year</b></td>
            <td  className='tilte-td'><b>: </b>{item.dueYear}</td>
        </tr>

        <tr>
            <td  className='tilte-td'><b>Fees Amount</b></td>
            <td  className='tilte-td'><b>: </b>{item.feesAmount}</td>
            <td  className='tilte-td'><b>Bills Received</b></td>
            <td  className='tilte-td'><b>: </b>{item.isGSTBillReceived.toString()}</td>
        </tr>
        <tr>
        <td  className='tilte-td'><b>Amount Paid</b></td>
            <td  className='tilte-td'>(-) {item.amountPaid}</td>
           
            <td  className='tilte-td'><b>GST Filed </b></td>
            <td  className='tilte-td'><b>: </b>{item.isGSTFiled.toString()}</td>
        </tr>
       <tr>
       <td ><b>Current Balance</b></td>
            <td  >= {item.currentBalance}</td>
       </tr>
       
    </tbody>
   
    </table>
  
  
  
    </div>
   
    </div>
  )
}

export default CollectionAndBalanceView