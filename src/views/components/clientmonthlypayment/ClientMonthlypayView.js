import React from 'react'

const ClientMonthlypayView = ({item}) => {
  console.log("viewaddress",item)
        const transactionDate=item.transactionDate
         var TransactionDate = new Date(transactionDate).toLocaleDateString();
        
  return (
    <div className='container' >
                
        
    <div className='displaylist mt-2 ml-0 m-auto p-5'>
<table class="view-table table table-responsive ml-0 w-full m-auto ">
    <tbody className='view-table-body '>
    <tr className='view-row' >
                  <td className='tilte-td'><b>Proprietor Name</b></td>
                  <td  className='tilte-td'><b>: </b>{item.gstClient.proprietorName}</td>
                  <td className='tilte-td'><b>GST TIN</b></td>
                  <td  className='tilte-td'><b>: </b>{item.gstClient.gstin}</td>
              </tr>
              <tr>
                  <td  className='tilte-td'><b>Service Name</b></td>
                  <td  className='tilte-td'><b>: </b>{item.serviceCategory.serviceName}</td>
                  <td  className='tilte-td'><b>Payment Method</b></td>
                  <td  className='tilte-td'><b>: </b>{item.paymentType.paymentMethod}</td>
              </tr>
              <tr>
                  <td  className='tilte-td'><b>Due Month</b></td>
                  <td  className='tilte-td'><b>: </b>{item.dueMonth}</td>
                  <td  className='tilte-td'><b>Due Year</b></td>
                  <td  className='tilte-td'><b>: </b>{item.dueYear}</td>
              </tr>

              <tr>
              <td  className='tilte-td'><b>Received Amount</b></td>
                  <td  className='tilte-td'><b>: </b>{item.receivedAmount}</td>
                  <td  className='tilte-td'><b>Payment Reference Number</b></td>
                  <td  className='tilte-td'><b>: </b>{item.paymentReferenceNumber}</td>
                 
              </tr>
              <tr>
                  <td  className='tilte-td'><b>Transaction Date</b></td>
                  <td  className='tilte-td'><b>: </b>{TransactionDate}</td>
                  <td  className='tilte-td'><b>Transaction Recorded By </b></td>
                  <td  className='tilte-td'><b>: </b>{item.transactionRecordedBy}</td>
              </tr>
              <tr>
                  <td  className='tilte-td'><b>Comments</b></td>
                  <td  className='tilte-td'><b>: </b>{item.comments}</td>  
              </tr>
             
          </tbody>
          </table>
    </div>
  
    </div>
)
}

export default ClientMonthlypayView