import axios from "axios"
import { API_BASE_URL } from "../config/index";

const GetBillAndFee = ()=>{
    return axios.get(API_BASE_URL+'/api/GSTBillAndFeeCollection/GetGSTBillAndFeeCollection')
}
const GetBillAndFeeById = (id)=>{
    return axios.get(API_BASE_URL+`/api/GSTBillAndFeeCollection/GetGSTBillAndFeeCollection/${id}`)
}
const Create_BillAndFee = (data)=>{
    return axios.post(API_BASE_URL+'/api/GSTBillAndFeeCollection/CreateGSTBillAndFeeCollection',data)
}
const Update_BillAndFee= (data,id)=>{
    return axios.put(API_BASE_URL+`/api/GSTBillAndFeeCollection/UpdateGSTBillAndFeeCollection/${id}`,data)
}
const Delete_BillAndFee= (id)=>{
    return axios.delete(API_BASE_URL+`/api/GSTBillAndFeeCollection/DeleteGSTBillAndFeeCollection/${id}`)
}
export {GetBillAndFee,GetBillAndFeeById,Create_BillAndFee,Update_BillAndFee,Delete_BillAndFee}