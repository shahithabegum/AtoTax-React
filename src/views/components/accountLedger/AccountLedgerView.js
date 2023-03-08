import React from 'react'

const AccountLedgerView = ({item}) => {
  console.log("viewaddress",item)
        const transactionDate=item.transactionDate
         var TransactionDate = new Date(transactionDate).toLocaleDateString();
        
  return (
    <div className='container' >
                
        
    <div className='displaylist mt-2 ml-0 m-auto p-5'>
<table class="view-table table table-responsive ml-0 w-full m-auto ">
    <tbody className='view-table-body '>
    <tr className='view-row' >
                  <td className='tilte-td'><b>Income Amount</b></td>
                  <td  className='tilte-td'><b>: </b>{item.incomeAmount}</td>
                  <td className='tilte-td'><b>Expense Amount</b></td>
                  <td  className='tilte-td'><b>: </b>{item.expenseAmount}</td>
              </tr>
              <tr>
                  <td  className='tilte-td'><b>Payment Type</b></td>
                  <td  className='tilte-td'><b>: </b>{item.paymentType.paymentMethod}</td>
                  <td  className='tilte-td'><b>GST Client Paid</b></td>
                  <td  className='tilte-td'><b>: </b>{item.isGSTClientPaid}</td>
              </tr>
              <tr>
                  <td  className='tilte-td'><b>Transactio nReference No</b></td>
                  <td  className='tilte-td'><b>: </b>{item.transactionReferenceNo}</td>
                  <td  className='tilte-td'><b>Transaction Date</b></td>
                  <td  className='tilte-td'><b>: </b>{TransactionDate}</td>
                 
              </tr>
              <tr>
                 <td  className='tilte-td'><b>Transaction Recorded By </b></td>
                  <td  className='tilte-td'><b>: </b>{item.transactionRecordedBy}</td>
                  <td  className='tilte-td'><b>Comments</b></td>
                  <td  className='tilte-td'><b>: </b>{item.comments}</td>  
              </tr>
             
          </tbody>
          </table>
    </div>
  
    </div>
)
}

export default AccountLedgerView