import axios from "axios"
import { API_BASE_URL } from "../config/index";
const GetAccountLedger = ()=>{
    return axios.get(API_BASE_URL+'/api/AccountLedgers/GetAccountLedger')
}
const GetAccountLedgerById = (id)=>{
    return axios.get(API_BASE_URL+`/api/AccountLedgers/GetAccountLedger/${id}`)
}
const Create_AccountLedger = (data)=>{
    return axios.post(API_BASE_URL+'/api/AccountLedgers/CreateAccountLedger',data)
}

export{GetAccountLedger,GetAccountLedgerById,Create_AccountLedger}