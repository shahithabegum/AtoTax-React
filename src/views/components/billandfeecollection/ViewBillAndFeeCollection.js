import React from 'react'

const ViewBillAndFeeCollection = ({item}) => {
  console.log("viewaddress",item)
  const receivedDate=item.receivedDate
   var ReceivedDate = new Date(receivedDate).toLocaleDateString();
   const filedDate=item.filedDate
   var FiledDate = new Date(filedDate).toLocaleDateString();
   
  
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
                  <td  className='tilte-td'><b>Service Description</b></td>
                  <td  className='tilte-td'><b>: </b>{item.serviceCategory.description}</td>
              </tr>
              <tr>
                  <td  className='tilte-td'><b>Multi media</b></td>
                  <td  className='tilte-td'><b>: </b>{item.multimediaType.media}</td>
                  <td  className='tilte-td'><b>Multi Description</b></td>
                  <td  className='tilte-td'><b>: </b>{item.multimediaType.description}</td>
              </tr>
              <tr>
                  <td  className='tilte-td'><b>Filing Type</b></td>
                  <td  className='tilte-td'><b>: </b>{item.gstFilingType.filingType}</td>
                  <td  className='tilte-td'><b>Fees Amount</b></td>
                  <td  className='tilte-td'><b>: </b>{item.feesAmount}</td>
              </tr>
              <tr>
                  <td  className='tilte-td'><b>Fees Paid Amount</b></td>
                  <td  className='tilte-td'><b>: </b>{item.feesPaidAmt}</td>
                  <td  className='tilte-td'><b>Balance</b></td>
                  <td  className='tilte-td'><b>: </b>{item.balance}</td>
              </tr>
              <tr>
                  <td  className='tilte-td'><b>Due Month</b></td>
                  <td  className='tilte-td'><b>: </b>{item.dueMonth}</td>
                  <td  className='tilte-td'><b>Due Year</b></td>
                  <td  className='tilte-td'><b>: </b>{item.dueYear}</td>
              </tr>

              <tr>
                  <td  className='tilte-td'><b>Received By</b></td>
                  <td  className='tilte-td'><b>: </b>{item.receivedBy}</td>
                  <td  className='tilte-td'><b>Received Date</b></td>
                  <td  className='tilte-td'><b>: </b>{ReceivedDate}</td>
              </tr>
              <tr>
                  <td  className='tilte-td'><b>Bills Received</b></td>
                  <td  className='tilte-td'><b>: </b>{item.isBillsReceived.toString()}</td>
                  <td  className='tilte-td'><b>Filed </b></td>
                  <td  className='tilte-td'><b>: </b>{item.isFiled.toString()}</td>
              </tr>
              <tr>
                  <td  className='tilte-td'><b>Filed By</b></td>
                  <td  className='tilte-td'><b>: </b>{item.filedBy}</td>
                  <td  className='tilte-td'><b>Filed Date</b></td>
                  <td  className='tilte-td'><b>: </b>{FiledDate}</td>
              </tr>
             
          </tbody>
          </table>
          </div>
        
          </div>
  )
}

export default ViewBillAndFeeCollection