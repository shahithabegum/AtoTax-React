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
const Update_ProcessInvoices= (data,id)=>{
    return axios.put(API_BASE_URL+`/api/ProcessTrackingAndFeeBalances/UpdateProcessInvoicesReceived/${id}`,data)
}
export{GetAllProcessTrackingAndFeeBalances,GetlProcessTrackingAndFeeBalancesById,GetPendingPayments,GetPendingPaymentsByClient,GetFiledStatus,
    GetBillsNotReceivedList,GetlMonthAndYearByClient,GetProcessPopupDataById,Update_ProcessInvoices}