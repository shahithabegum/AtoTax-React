import React from 'react'

const ViewUser = ({item}) => {
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
                  <td  className='tilte-td'><b>User Name</b></td>
                  <td  className='tilte-td'><b>: </b>{item.userName}</td>
              </tr>
              <tr  >
                  <td className='tilte-td'><b>Name</b></td>
                  <td  className='tilte-td'><b>: </b>{item.name}</td>
              </tr>
              <tr>
              <td className='tilte-td'><b>Date of birth</b></td>
              <td className='tilte-td'><b>: </b>{Dob}</td>
             </tr>
             <tr>
             <td className='tilte-td'><b>Date of Join</b></td>
              <td className='tilte-td'><b>: </b>{Doj}</td>
             </tr>
             <tr>
             <td  className='tilte-td'><b>Email</b></td>
                  <td  className='tilte-td'><b>: </b>{item.email}</td>
             </tr>
             <tr>
             <td  className='tilte-td'><b>Phone Number</b></td>
                  <td  className='tilte-td'><b>: </b>{item.phoneNumber}</td>
             </tr>
          </tbody>
          </table>
          {/* <p className='text-center col-lg-12 col-md-12 col-sm-12'><b>AddressType Name :</b> {item.addressTypeName}<b>AddressType Name :</b> {item.addressTypeName}</p>
          <p className='text-center'><b> AddressType Desc :</b> {item.addressTypeDesc}</p>
         <p ><b>Status :</b> {item.status.statusType}</p>
         <p className='text-center'><b>Created Date:</b> {item.createdDate}</p>
         <p className='text-center'><b>LastModified Date :</b> {item.lastModifiedDate}</p> */}
          </div>
        
          </div>
  )
}

export default ViewUser