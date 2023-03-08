import axios from "axios"
import { API_BASE_URL } from "../config/index";
const GetAllCollectionAndBalance = ()=>{
    return axios.get(API_BASE_URL+'/api/CollectionAndBalances/GetCollectionAndBalances')
}
const GetlCollectionAndBalanceById = (id)=>{
    return axios.get(API_BASE_URL+`/api/CollectionAndBalances/GetCollectionAndBalance/${id}`)
}
const GetlMonthAndYearByClient = (id)=>{
    return axios.get(API_BASE_URL+`/api/CollectionAndBalances/GetMonthAndYearDataforGSTClient/${id}`)
}
const GetPendingPayments = ()=>{
    return axios.get(API_BASE_URL+'/api/CollectionAndBalances/GetPendingPaymentList')
}
const GetPendingPaymentsByClient = ()=>{
    return axios.get(API_BASE_URL+'/api/CollectionAndBalances/GetPendingPaymentListByClient')
}
const GetFiledStatus = ()=>{
    return axios.get(API_BASE_URL+'/api/CollectionAndBalances/GetGSTFiledStatusList?bBillsReceived=false&bGSTFiled=false')
}
const GetBillsNotReceivedList = ()=>{
    return axios.get(API_BASE_URL+'/api/CollectionAndBalances/GetGSTBillsNotReceivedList')
}
export{GetAllCollectionAndBalance,GetlCollectionAndBalanceById,GetPendingPayments,GetPendingPaymentsByClient,GetFiledStatus,GetBillsNotReceivedList,GetlMonthAndYearByClient}