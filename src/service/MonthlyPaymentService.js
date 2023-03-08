import axios from "axios"
import { API_BASE_URL } from "../config/index";
const GetMonthlyPayment = ()=>{
    return axios.get(API_BASE_URL+'/api/ClientMonthlyPayments/GetClientMonthlyPayments')
}
const GetMonthlyPaymentById = (id)=>{
    return axios.get(API_BASE_URL+`/api/ClientMonthlyPayments/GetClientMonthlyPayment/${id}`)
}
const Create_MonthlyPayment = (data)=>{
    return axios.post(API_BASE_URL+'/api/ClientMonthlyPayments/CreateClientMonthlyPayment',data)
}

export{GetMonthlyPayment,GetMonthlyPaymentById,Create_MonthlyPayment}