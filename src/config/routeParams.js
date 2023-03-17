import PageNotFound from '../views/components/PageNotFound';
import CommonLayout from '../views/layout/CommonLayout';
import Dashboard from '../views/components/dashboard/Dashbord'
import GstClient from '../views/components/gstclient/GstClient';
import GstForm from '../views/components/gstclient/GstClientCreate';
import GstEditing from '../views/components/gstclient/GstEditing';
import GstClientView from '../views/components/gstclient/GstClientView';
import Status from '../views/components/status/Status'
import CreateStatus from '../views/components/status/CreateStatus'
import PaymentTypes from '../views/components/paymenttypes/PaymentTypes'
import CreatePayment from '../views/components/paymenttypes/CreatePayment';
import UpdatePayment from '../views/components/paymenttypes/UpdatePayment';
import ViewPayment from '../views/components/paymenttypes/ViewPayment'
import AmendType from '../views/components/amendtypes/AmendType';
// import CreateAmendType from '../views/components/amendtypes/CreateAmendType'
// import UpdateAmendType from '../views/components/amendtypes/UpdateAmendType';
import ViewAmendType from '../views/components/amendtypes/ViewAmendType';
import AddressType from '../views/components/address/AddressType';
import CreateAddressType from '../views/components/address/CreateAddressType';
import UpdateAddresstype from '../views/components/address/UpdateAddresstype';
import ViewAdressType from '../views/components/address/ViewAdressType';
// import EmpJobRole from '../views/components/employeejobrole/EmpJobRole'
// import CreateEmpJobRole from '../views/components/employeejobrole/CreateEmpJobRole'
// import UpdateEmpJobRole from '../views/components/employeejobrole/UpdateEmpJobRole'
// import ViewEmpJobRole from '../views/components/employeejobrole/ViewEmpJobRole'
import MediaTypes from '../views/components/mediatypes/MediaTypes'
import CreateMedia from '../views/components/mediatypes/CreateMedia'
import UpdateMedia from '../views/components/mediatypes/UpdateMedia'
import ViewMedia from '../views/components/mediatypes/ViewMedia'
import Amendments from '../views/components/amendments/Amendments'
import CreateAmendments from  '../views/components/amendments/CreateAmendments'
// import Employees from '../views/components/employees/Employees'
import GStClientAddressEx from '../views/components/gstclientaddressextensions/GstClientAddressEx'
import GstFilingTypes from '../views/components/gstfilingtypes/GstFilingTypes'
import CreateGstFilingTypes from '../views/components/gstfilingtypes/CreateGstFilingTypes'
import GstPaidDetails from '../views/components/gstpaiddetails/GstPaidDetails'
import WeatherForecast from '../views/components/weatherforecast/WeatherForecast'
import Clientfeecharges from '../views/components/clientfeecharge/Clientfeecharges'
import ViewFeeCharge from '../views/components/clientfeecharge/ViewFeeCharge'
import Createfeecharge from '../views/components/clientfeecharge/Createfeecharge'
import UpdateFeeCharge from '../views/components/clientfeecharge/UpdateFeeCharge'
import UpdateGstfilingTypes from '../views/components/gstfilingtypes/UpdateGstfilingTypes'
import ViewGstFilingTypes from '../views/components/gstfilingtypes/ViewGstFilingTypes'
import ServiceCat from '../views/components/serviceCategory/ServiceCat'
import AddServiceCat from '../views/components/serviceCategory/AddServiceCat'
import UpdateSeriveCat from '../views/components/serviceCategory/UpdateSeriveCat'
import ViewServiceCat from '../views/components/serviceCategory/ViewServiceCat'
// import ViewEmployees from '../views/components/employees/ViewEmployees'
// import CreateEmployees from '../views/components/employees/CreateEmployees'
// import UpdateEmployees from '../views/components/employees/UpdateEmployees'
import Login from '../views/components/login/Login';
import Register from '../views/components/Signup/Register';
import UpdateAmendments from '../views/components/amendments/UpdateAmendments';
import ViewAmendments from '../views/components/amendments/ViewAmendments';
import ServiceHistory from '../views/components/servicechargeHistory/ServiceHistory';
import CreateServiceHistory from '../views/components/servicechargeHistory/CreateServiceHistory';
import ServiceHistoryView from '../views/components/servicechargeHistory/ServiceHistoryView';
import CreateGstClientAddressEx from '../views/components/gstclientaddressextensions/CreateGstClientAddressEx';
import UpdateGstClientAddressEx from '../views/components/gstclientaddressextensions/UpdateGstClientAddressEx';
import ViewGstClientAddressEx from '../views/components/gstclientaddressextensions/ViewGstClientAddressEx';
import ForgotPassword from '../views/components/password/forgotpassword/ForgotPassword';
import ResetPassword from '../views/components/password/resetpassword/ResetPassword';
import Emailpopup from '../views/components/email/Emailpopup';
import ConfirmEmailpage from '../views/components/email/ConfirmEmailpage';
import ChangePassword from '../views/components/password/changepassword/ChangePassword';
import User from '../views/components/user/User';
import UpdateUser from '../views/components/user/UpdateUser';
import ViewUser from '../views/components/user/ViewUser';
import Roles from '../views/components/roles/Roles';
import CreateGstPaid from '../views/components/gstpaiddetails/CreateGstPaid';
import UpdateGstPaid from '../views/components/gstpaiddetails/UpdateGstPaid';
import ViewGstPaid from '../views/components/gstpaiddetails/ViewGstPaid';
import AsignRole from '../views/components/roles/AsignRole';
import BillAndFeeCollection from '../views/components/billandfeecollection/BillAndFeeCollection';
import CreateBillAndFeeCollection from '../views/components/billandfeecollection/CreateBillAndFeeCollection';
import UpdateBillAndFeeCollection from '../views/components/billandfeecollection/UpdateBillAndFeeCollection';
import ViewBillAndFeeCollection from '../views/components/billandfeecollection/ViewBillAndFeeCollection';
import ClientMonthlyPay from '../views/components/clientmonthlypayment/ClientMonthlyPay';
import MonthlypayCreate from '../views/components/clientmonthlypayment/MonthlypayCreate';
import ClientMonthlypayView from '../views/components/clientmonthlypayment/ClientMonthlypayView';
import AccountLedger from '../views/components/accountLedger/AccountLedger'
import AccountLedgerCreate from '../views/components/accountLedger/AccountLedgerCreate'
import AccountLedgerView from '../views/components/accountLedger/AccountLedgerView'
import CollectionAndBalance from '../views/components/collectionandbalance/CollectionAndBalance';
import CollectionAndBalanceView from '../views/components/collectionandbalance/CollectionAndBalanceView';
import { BillandFeeTest } from '../views/components/billandfeecollection/BillandFeeTest';
import SalesGSTR from '../views/components/billandfeecollection/SalesGSTR';
import GSTR3B from '../views/components/billandfeecollection/GSTR3B';
export const pathroutes=[
    {
        path: "/login",
        DynComponent: Login
    },
    {
        path: "/forgotpassword",
        DynComponent: ForgotPassword
    },
    {
        path: "/resetpassword",
        DynComponent: ResetPassword
    },
    {
        path:"/confirm-email",
        DynComponent:ConfirmEmailpage
    },
    
    {
        path:'/',
        DynComponent:CommonLayout,
        isExact:false,
        childRoutes:[
            {
                path: "/dashboard",
                DynComponent: Dashboard
            },
            {
                path: "/register",
                DynComponent: Register
            },
            {
                path:"/emailpopup",
                DynComponent: Emailpopup
            },
            {
                path:"/changepassword",
                DynComponent: ChangePassword
            },
           
            // -------------GSTCLIENT-----------
            {
                path: "/Gstclient",
                DynComponent: GstClient
            },
            {
                path: "/gstform",
                DynComponent: GstForm
            },
            {
                path: "/gstedit",
                DynComponent: GstEditing
            },
            {
                path: "/gstview",
                DynComponent: GstClientView
            },
              // -------------Uers-----------
              {
                path: "/users",
                DynComponent: User
            },
            {
                path: "/updateuser",
                DynComponent: UpdateUser
            },
            {
                path: "/viewuser",
                DynComponent: ViewUser
            },
          
             // -------------PaymentsTypes-----------
            {
                path: "/PaymentTypes",
                DynComponent: PaymentTypes
            },
            {
                path: "/addPayment",
                DynComponent: CreatePayment
            },
            {
                path: "/editPayment",
                DynComponent: UpdatePayment
            },
            {
                path: "/viewPayment",
                DynComponent: ViewPayment
            },
          // -------------AMENDTYPES-----------
          {
            path: "/AmendType",
            DynComponent: AmendType
        },
        // {
        //     path: "/createadmend",
        //     DynComponent: CreateAmendType
        // },
        // {
        //     path: "/UpdateAmendType",
        //     DynComponent: UpdateAmendType
        // },
        {
            path: "/ViewAmendType",
            DynComponent: ViewAmendType
        },
         // -------------ADDRESSTYPE-----------
         {
            path: "/addressType",
            DynComponent: AddressType
        },
        {
            path: "/addAddress",
            DynComponent: CreateAddressType
        },
        {
            path: "/editAddress",
            DynComponent: UpdateAddresstype
        },
        {
            path: "/viewAddress",
            DynComponent: ViewAdressType
        },
        // -------------CollectionAndBalance-----------
        {
            path: "/ProcessTrackingAndFeeBalances",
            DynComponent: CollectionAndBalance
        },
        {
            path: "/ProcessTrackingAndFeeBalancesView",
            DynComponent: CollectionAndBalanceView
        },
        {
            path: "/salesGstr1",
            DynComponent: SalesGSTR
        },
        {
            path: "/GSTR3B",
            DynComponent: GSTR3B
        },
         // -------------Media  TYPE-----------
         {
            path: "/MediaTypes",
            DynComponent: MediaTypes
        },
        {
            path: "/createmedia",
            DynComponent: CreateMedia
        },
        {
            path: "/updatemedia",
            DynComponent: UpdateMedia
        },
        {
            path: "/mediaview",
            DynComponent: ViewMedia
        },
        // -------------Amendments-----------
        {
            path: "/amendments",
            DynComponent: Amendments
        },
        {
            path: "/addamendments",
            DynComponent: CreateAmendments
        },
        {
            path: "/updateAmendments",
            DynComponent: UpdateAmendments
        },
        {
            path: "/viewamendments",
            DynComponent: ViewAmendments
        },
         // -------------GST CLient Address-----------
         {
            path: "/GStClientAddressEx",
            DynComponent: GStClientAddressEx
        },
        {
            path: "/createGStClientAddressEx",
            DynComponent: CreateGstClientAddressEx
        },
        {
            path: "/UpdateGStClientAddressEx",
            DynComponent: UpdateGstClientAddressEx
        },
        {
            path: "/ViewGStClientAddressEx",
            DynComponent: ViewGstClientAddressEx
        },
         // -------------GST FilingTypes-----------
         {
            path: "/GstFilingTypes",
            DynComponent: GstFilingTypes
        },
        {
            path: "/addGstFiling",
            DynComponent: CreateGstFilingTypes
        },
        {
            path: "/editGstFiling",
            DynComponent: UpdateGstfilingTypes
        },
        {
            path: "/viewGstFiling",
            DynComponent: ViewGstFilingTypes
        },
          // -------------GST paidDetails-----------
          {
            path: "/GstPaidDetails",
            DynComponent: GstPaidDetails
        },
        {
            path: "/createGstPaiddetails",
            DynComponent: CreateGstPaid
        },
        {
            path: "/updateGstPaiddetails",
            DynComponent: UpdateGstPaid
        },
        {
            path: "/viewGstPaiddetails",
            DynComponent: ViewGstPaid
        },
        // -------------Status & Weatherforecast &Roles-----------
        {
            path: "/Status",
            DynComponent: Status
        },
        {
            path: "/roles",
            DynComponent: Roles
        },
        {
            path: "/assignroles",
            DynComponent: AsignRole
        },
       
        {
            path: "/addStatus",
            DynComponent: CreateStatus
        },
        {
            path: "/WeatherForecast",
            DynComponent: WeatherForecast
        },
        // -------------GST CLient Fee-----------
        {
            path: "/Clientfeecharges",
            DynComponent: Clientfeecharges
        },
        {
            path: "/addfeecharges",
            DynComponent: Createfeecharge
        },
        {
            path: "/editfeecharges",
            DynComponent: UpdateFeeCharge
        },
        {
            path: "/viewFeeCharge",
            DynComponent: ViewFeeCharge
        },
        // ------------Service Category-----------
        {
            path: "/serviceCat",
            DynComponent: ServiceCat
        },
        {
            path: "/addServiceCat",
            DynComponent: AddServiceCat
        },
        {
            path: "/editSeriveCat",
            DynComponent: UpdateSeriveCat
        },
        {
            path: "/viewServiceCat",
            DynComponent: ViewServiceCat
        },
         // ------------BillAndFeeCollection-----------
         {
            path: "/billandfeecollection",
            DynComponent: BillAndFeeCollection
        },
        {
            path: "/CreateBillAndFeeCollection",
            DynComponent: CreateBillAndFeeCollection
        },
        {
            path: "/UpdateBillAndFeeCollection",
            DynComponent: UpdateBillAndFeeCollection
        },
        {
            path: "/ViewBillAndFeeCollection",
            DynComponent: ViewBillAndFeeCollection
        },
        {
            path: "/BillandFee",
            DynComponent: BillandFeeTest
        },
          // ------------Service Charge Update History-----------
          {
            path: "/serviceHistory",
            DynComponent: ServiceHistory
        },
        {
            path: "/addCreateServiceHistory",
            DynComponent: CreateServiceHistory
        },
        // {
        //     path: "/editSeriveCat",
        //     DynComponent: UpdateSeriveCat
        // },
        {
            path: "/viewServicehistory",
            DynComponent: ServiceHistoryView
        },
          // ------------MonthlyPayments-----------
          {
            path: "/clientMonthlyPay",
            DynComponent: ClientMonthlyPay
        },
        {
            path: "/MonthlypayCreate",
            DynComponent: MonthlypayCreate
        },
        {
            path: "/ClientMonthlypayView",
            DynComponent: ClientMonthlypayView
        },
         // ------------AccountsLedger-----------
         {
            path: "/accountLedger",
            DynComponent: AccountLedger
        },
        {
            path: "/AccountLedgerCreate",
            DynComponent: AccountLedgerCreate
        },
        {
            path: "/AccountLedgerView",
            DynComponent: AccountLedgerView
        },
        ]
    },
    {
        path: '*',
        isExact: false,
        DynComponent: PageNotFound
    }
];
