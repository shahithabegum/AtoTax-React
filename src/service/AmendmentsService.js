import axios from "axios"
import { API_BASE_URL } from "../config/index";

const GetAmendments = ()=>{
    return axios.get(API_BASE_URL+'/api/Amendment/GetAmendments')
}
const GetApprovelStatusDD = ()=>{
    return axios.get(API_BASE_URL+'/api/ApprovalStatusTypes/GetApprovalStatusTypesForDD')
}
const GetAmendmentsById = (id)=>{
    return axios.get(API_BASE_URL+`/api/Amendment/GetAmendment/${id}`)
}
const Create_Amendments = (data)=>{
    return axios.post(API_BASE_URL+'/api/Amendment/CreateAmendment',data)
}
const Update_Amendments = (data,id)=>{
    return axios.put(API_BASE_URL+`/api/Amendment/UpdateAmendment/${id}`,data)
}
const DeleteAmendments = (id)=>{
    return axios.delete(API_BASE_URL+`/api/Amendment/DeleteAmendment/${id}`)
}
export {GetAmendments,GetAmendmentsById,Create_Amendments,Update_Amendments,DeleteAmendments,GetApprovelStatusDD}