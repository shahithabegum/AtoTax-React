import React from "react";


import "./Gststyle.scss";
const GstClientView = ({ item }) => {
  const regdate=item.gstRegDate
  var RegDate = new Date(regdate).toLocaleDateString();
  const RelievedDate=item.gstRelievedDate
  var gstRelievedDate = new Date(RelievedDate).toLocaleDateString();
  const SurrenderedDate=item.gstSurrenderedDate
  var gstSurrenderedDate = new Date(SurrenderedDate).toLocaleDateString();

  return (
    <div className="container">
      <div className="displaylist mt-2 ml-0 m-auto p-3">
        <table class="view-table table table-responsive ml-0 w-full m-auto ">
          <tbody className="view-table-body ">
            <tr>
            <td className='tilte-td'>
                <b>Proprietor Name</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.proprietorName}</td>
              <td className='tilte-td'>
                <b>GST TIN</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.gstin}</td>  
             
            </tr>
            <tr>
            <td className='tilte-td'>
                <b>GST UserName</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.gstUserName}</td>
              <td className='tilte-td'>
                <b>GSTUser Password</b>
              </td>
             
              <td className='tilte-td'><b>: </b>{item.gstUserPassword}</td>
             
            </tr>
            <tr>
              <td className='tilte-td'>
                <b>GST Email</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.gstEmailId}</td>
              <td className='tilte-td'>
                <b>GST Email Password</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.gstEmailPassword}</td>
            </tr>
            <tr>
              <td className='tilte-td'>
                <b>GST Recovery Email</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.gstRecoveryEmailId}</td>
              <td className='tilte-td'>
                <b>GST Recovery Email Password</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.gstRecoveryEmailPassword}</td>
            </tr>
            <tr>
              <td className='tilte-td'>
                <b>GST Registration Date</b>
              </td>
              <td className='tilte-td'><b>: </b>{RegDate}</td>
              <td className='tilte-td'>
                <b>GST Relieved Date</b>
              </td>
              <td className='tilte-td'><b>: </b>{gstRelievedDate}</td>
            </tr>
            <tr>
            <td className='tilte-td'>
                <b>GSTAnnual TurnOver</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.gstAnnualTurnOver}</td>
              <td className='tilte-td'>
                <b>GSTSurrendered Date</b>
              </td>
              <td className='tilte-td'><b>: </b>{gstSurrenderedDate}</td>
            </tr>
            <tr>
            
            <td className='tilte-td'>
                <b>Contact Name</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.contactName}</td>
              <td className='tilte-td'>
                <b>Contact EmailId</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.contactEmailId}</td>
            </tr>
            <tr>
            <td className='tilte-td'>
                <b>Phone Number</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.phoneNumber}</td>
              <td className='tilte-td'>
                <b>Mobile Number</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.mobileNumber}</td>
            </tr>
            
            <tr>
             
              <td className='tilte-td'>
                <b>Eway BillUser Name</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.ewayBillUserName}</td>
             
              <td className='tilte-td'>
                <b>Eway Bill Password</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.ewayBillPassword}</td>
            </tr>
           
            <tr>
            <td className='tilte-td'>
                <b>Tally DataFile path</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.tallyDataFilePath}</td>
              <td className='tilte-td'>
                <b>RackFileNo</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.rackFileNo}</td>
            </tr>
           
            <tr>
              <td className='tilte-td'>
                <b>Status Type</b>
              </td>
              <td className='tilte-td'><b>: </b>{item.status.statusType}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GstClientView;
