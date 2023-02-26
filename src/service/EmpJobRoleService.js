import axios from "axios"
import { API_BASE_URL } from "../config/index";

const GetEmpJobRole = ()=>{
    return axios.get(API_BASE_URL+'/api/EmpJobRole/GetEmpJobRole')
}
const GetEmpJobRoleById = (id)=>{
    return axios.get(API_BASE_URL+`/api/EmpJobRole/GetEmpJobRole/${id}`)
}
const Create_EmpJobRole = (data)=>{
    return axios.post(API_BASE_URL+'/api/EmpJobRole/CreateEmpJobRole',data)
}
const Update_EmpJobRole = (data,id)=>{
    return axios.put(API_BASE_URL+`/api/EmpJobRole/UpdateEmpJobRole/${id}`,data)
}
const DeleteEmpJobRole = (id)=>{
    return axios.delete(API_BASE_URL+`/api/EmpJobRole/DeleteEmpJobRole/${id}`)
}
export {GetEmpJobRole,GetEmpJobRoleById,Create_EmpJobRole,Update_EmpJobRole,DeleteEmpJobRole}