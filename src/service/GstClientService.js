import axios from "axios";
import { API_BASE_URL } from "../config/index";

const CreateGSTClient =(data)=>{
    return axios.post(API_BASE_URL+'/api/GSTClients/CreateGSTClient',data)
}
const GetGSTClients = ()=>{
    return axios.get(API_BASE_URL+'/api/GSTClients/GetGSTClients')
}
const GetGSTClientsDD = ()=>{
    return axios.get(API_BASE_URL+'/api/GSTClients/GetActiveGSTClientsForDD')
}
const GetGstClientById = (id)=>{
    return axios.get(API_BASE_URL+`/api/GSTClients/GetGSTClient/${id}`)
}

const UpdateGSTClient = (data,id)=>{
    return axios.put(API_BASE_URL+`/api/GSTClients/UpdateGSTClient/${id}`,data)
}
const DeleteGSTClient = (id)=>{
    return axios.delete(API_BASE_URL+`/api/GSTClients/DeleteGSTClient/${id}`)
}


export {CreateGSTClient,
    GetGSTClients,
    GetGstClientById,
    GetGSTClientsDD,
    DeleteGSTClient,
    UpdateGSTClient
   
}