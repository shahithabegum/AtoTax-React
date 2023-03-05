import react from 'react'


const ViewAmendments = ({item}) => {
    const CreatedDate=item.createdDate
    var CreatedlocalDate = new Date(CreatedDate).toLocaleDateString();
    const ModifiedDate=item.lastModifiedDate
    var ModifiedlocalDate = new Date(ModifiedDate).toLocaleDateString();
    const sumittedDate=item.sumittedDate
    var SumittedDate = new Date(sumittedDate).toLocaleDateString();
    const approvedDate=item.approvedDate
    var ApprovedDate = new Date(approvedDate).toLocaleDateString();
    
  return (
    
    <div className='container' >
                
        
    <div className='displaylist mt-2 ml-0 m-auto p-5'>
<table class="view-table table table-responsive ml-0 w-full m-auto ">
    <tbody className='view-table-body '>
            <tr>
                <td className='tilte-td'><b>Proprietor Name</b></td>
                <td className='tilte-td'><b>: </b>{item.gstClient.proprietorName}</td>
                <td className='tilte-td'><b>GST TIN</b></td>
                <td className='tilte-td'><b>: </b>{item.gstClient.gstin}</td>
            </tr> 
            <tr>
                <td className='tilte-td'><b>Amend Type Name</b></td>
                <td className='tilte-td'><b>: </b>{item.amendType.amendTypeName}</td>
                <td className='tilte-td'><b>ARN</b></td>
                <td className='tilte-td'><b>: </b>{item.arn}</td>
            </tr>   
            <tr>
                <td className='tilte-td'><b>Sumitted Date</b></td>
                <td className='tilte-td'><b>: </b>{SumittedDate}</td>
                <td className='tilte-td'><b>Approved Date</b></td>
                <td className='tilte-td'><b>: </b>{ApprovedDate}</td>
            </tr>  
            <tr>
                        <td  className='tilte-td'><b>Created Date</b></td>
                        <td  className='tilte-td'><b>: </b>{CreatedlocalDate}</td>
                        <td className='tilte-td'><b>Approval Status</b></td>
                        <td className='tilte-td'><b>: </b>{item.approvalStatusType.statusType}</td>
                       
            </tr>
            <tr>
            <td  className='tilte-td'><b>Last Modified Date</b></td>
                        <td  className='tilte-td'><b>: </b>{ModifiedlocalDate}</td>
            </tr>
           
           </tbody>
           </table>
           
        </div>
    </div>
  )
}

export default ViewAmendments