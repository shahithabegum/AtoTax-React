import axios from "axios"
import { API_BASE_URL } from "../config/index";

const GetPayments = ()=>{
    return axios.get(API_BASE_URL+'/api/PaymentTypes/GetPaymentTypes')
}
const GetPaymentsDD = ()=>{
    return axios.get(API_BASE_URL+'/api/PaymentTypes/GetActivePaymentTypesForDD')
}
const GetPaymentsById = (id)=>{
    return axios.get(API_BASE_URL+`/api/PaymentTypes/GetPaymentType/${id}`)
}
const Create_Payments = (data)=>{
    return axios.post(API_BASE_URL+'/api/PaymentTypes/CreatePaymentType',data)
}
const Update_Payments = (data,id)=>{
    return axios.put(API_BASE_URL+`/api/PaymentTypes/UpdatePaymentType/${id}`,data)
}
const DeletPayments = (id)=>{
    return axios.delete(API_BASE_URL+`/api/PaymentTypes/DeletePaymentType/${id}`)
}
export {GetPayments,GetPaymentsById,Create_Payments,Update_Payments,DeletPayments,GetPaymentsDD}