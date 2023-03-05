import React from 'react'


const ViewEmployees = ({item}) => {
    const CreatedDate=item.createdDate
    var CreatedlocalDate = new Date(CreatedDate).toLocaleDateString();
    const ModifiedDate=item.lastModifiedDate
    var ModifiedlocalDate = new Date(ModifiedDate).toLocaleDateString();
    const dob=item.dob
    var Dob = new Date(dob).toLocaleDateString();
    const doj=item.doj
    var Doj = new Date(doj).toLocaleDateString();
return (
  
    <div className='container' >
                
        
                <div className='displaylist mt-2 ml-0 m-auto p-5'>
        <table class="view-table table table-responsive ml-0 w-full m-auto ">
                <tbody className='view-table-body '>
          <tr>
              <td className='tilte-td'><b>First Name</b></td>
              <td className='tilte-td'><b>: </b>{item.firstName}</td>
              <td className='tilte-td'><b>Last Name</b></td>
              <td className='tilte-td'><b>: </b>{item.lastName}</td>
          </tr>
          <tr>
              <td className='tilte-td'><b>Job Role</b></td>
              <td className='tilte-td'><b>: </b>{item.empJobRole.jobRole}</td>
              <td className='tilte-td'><b>Job Role</b></td>
              <td className='tilte-td'><b>: </b>{item.status.statusType}</td>
          </tr>
          <tr>
              <td className='tilte-td'><b>Date of birth</b></td>
              <td className='tilte-td'><b>: </b>{Dob}</td>
              <td className='tilte-td'><b>Date of Join</b></td>
              <td className='tilte-td'><b>: </b>{Doj}</td>
          </tr>
          <tr>
              <td className='tilte-td'><b>Email</b></td>
              <td className='tilte-td'><b>: </b>{item.email}</td>
              <td className='tilte-td'><b>Contact Number</b></td>
              <td className='tilte-td'><b>: </b>{item.concactNo}</td>
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

export default ViewEmployees