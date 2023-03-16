import React from 'react'

const ViewFeeCharge = ({item}) => {
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
                <td className='tilte-td'><b>Proprietor Name</b></td>
                <td className='tilte-td'><b>: </b>{item.gstClient.proprietorName}</td>
                <td className='tilte-td'><b>GST TIN No</b></td>
                <td className='tilte-td'><b>: </b>{item.gstClient.gstin}</td>
            </tr>
            <tr>
                <td className='tilte-td'><b>Return Freq Type</b></td>
                <td className='tilte-td'><b>: </b>{item.returnFrequencyType.returnFreqType}</td>
                <td className='tilte-td'><b>Description </b></td>
                <td className='tilte-td'><b>: </b>{item.returnFrequencyType.description}</td>
            </tr>
            <tr>
                        <td  className='tilte-td'><b>Created Date</b></td>
                        <td  className='tilte-td'><b>: </b>{CreatedlocalDate}</td>
                        <td  className='tilte-td'><b>Last Modified Date</b></td>
                        <td  className='tilte-td'><b>: </b>{ModifiedlocalDate}</td>
            </tr>
            <tr>
                <td className='tilte-td'><b>Previous Charge </b></td>
                <td className='tilte-td'><b>: </b>{item.returnFrequencyType.previousCharge}</td>
                <td className='tilte-td'><b>Current Charge </b></td>
                <td className='tilte-td'><b>: </b>{item.defaultCharge}</td>
                
            </tr>
            <tr>
                <td className='tilte-td'><b>Fixed Charge </b></td>
                <td className='tilte-td'><b>: </b>{item.returnFrequencyType.fixedCharge}</td>
            </tr>
           
           </tbody>
           </table>
        </div>
    </div>
  )
}

export default ViewFeeCharge