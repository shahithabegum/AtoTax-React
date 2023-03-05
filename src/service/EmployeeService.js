import axios from "axios";
import { API_BASE_URL } from "../config/index";

const Create_Employee =(data)=>{
    return axios.post(API_BASE_URL+'/api/Employees/CreateEmployee',data)
}
const GetEmployees = ()=>{
    return axios.get(API_BASE_URL+'/api/Employees/GetEmployees')
}
const GetEmployeesDD = ()=>{
    return axios.get(API_BASE_URL+'/api/Employees/GetActiveEmployeesForDD')
}

const GetEmployeeById = (id)=>{
    return axios.get(API_BASE_URL+`/api/Employees/GetEmployee/${id}`)
}
const Update_Employee = (data,id)=>{
    return axios.put(API_BASE_URL+`/api/Employees/UpdateEmployee/${id}`,data)
}
const DeleteEmployee = (id)=>{
    return axios.delete(API_BASE_URL+`/api/Employees/DeleteEmployee/${id}`)
}

export {Create_Employee,
    GetEmployees,
    GetEmployeeById,
    DeleteEmployee,
    Update_Employee,
    GetEmployeesDD
}