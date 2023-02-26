import axios from "axios"
import { API_BASE_URL } from "../config/index";

const GetClientFeeCharge = ()=>{
    return axios.get(API_BASE_URL+'/api/ClientFeeMaps/GetClientFeeMaps')
}
const GetClientFeeChargeById = (id)=>{
    return axios.get(API_BASE_URL+`/api/ClientFeeMaps/GetClientFeeMap/${id}`)
}
const Create_ClientFeeCharge = (data)=>{
    return axios.post(API_BASE_URL+'/api/ClientFeeMaps/CreateClientFeeMap',data)
}
const Update_ClientFeeCharge = (data,id)=>{
    return axios.put(API_BASE_URL+`/api/ClientFeeMaps/UpdateClientFeeMap/${id}`,data)
}
const DeleteClientFeeCharge = (id)=>{
    return axios.delete(API_BASE_URL+`/api/ClientFeeMaps/DeleteClientFeeMap/${id}`)
}
export {GetClientFeeCharge,GetClientFeeChargeById,Create_ClientFeeCharge,Update_ClientFeeCharge,DeleteClientFeeCharge}