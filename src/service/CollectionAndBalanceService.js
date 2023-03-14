import axios from "axios"
import { API_BASE_URL } from "../config/index";
const GetAllProcessTrackingAndFeeBalances = ()=>{
    return axios.get(API_BASE_URL+'/api/ProcessTrackingAndFeeBalances/GetProcessTrackingAndFeeBalances')
}
const GetlProcessTrackingAndFeeBalancesById = (id)=>{
    return axios.get(API_BASE_URL+`/api/ProcessTrackingAndFeeBalances/GetProcessTrackingAndFeeBalance/${id}`)
}
const GetProcessPopupDataById = (id)=>{
    return axios.get(API_BASE_URL+`/api/ProcessTrackingAndFeeBalances/GetProcessPopupDataForGSTClient/${id}`)
}
const GetlMonthAndYearByClient = (id)=>{
    return axios.get(API_BASE_URL+`/api/ProcessTrackingAndFeeBalancess/GetMonthAndYearDataforGSTClient/${id}`)
}
const GetS1Process = (id)=>{
    return axios.get(API_BASE_URL+`/api/ProcessTrackingAndFeeBalances/GetS1ProcessInputforGSTClient/${id}`)
}
const GetPendingPayments = ()=>{
    return axios.get(API_BASE_URL+'/api/ProcessTrackingAndFeeBalances/GetPendingPaymentList')
}
const GetPendingPaymentsByClient = ()=>{
    return axios.get(API_BASE_URL+'/api/ProcessTrackingAndFeeBalances/GetPendingPaymentListByClient')
}
const GetFiledStatus = ()=>{
    return axios.get(API_BASE_URL+'/api/ProcessTrackingAndFeeBalances/GetGSTFiledStatusList')
}
const GetBillsNotReceivedList = ()=>{
    return axios.get(API_BASE_URL+'/api/ProcessTrackingAndFeeBalances/GetGSTBillsNotReceivedList')
}
const Update_ProcessInvoices= (data)=>{
    return axios.put(API_BASE_URL+`/api/ProcessTrackingAndFeeBalances/UpdateProcessInvoicesReceived`,data)
}
export{GetAllProcessTrackingAndFeeBalances,GetlProcessTrackingAndFeeBalancesById,GetPendingPayments,GetPendingPaymentsByClient,GetFiledStatus,
    GetBillsNotReceivedList,GetlMonthAndYearByClient,GetProcessPopupDataById,Update_ProcessInvoices,GetS1Process}