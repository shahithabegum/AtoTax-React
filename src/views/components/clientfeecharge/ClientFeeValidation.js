import * as Yup from 'yup';
export const ClientFeeValidation=Yup.object().shape({
  
    defaultCharge:Yup.number().required("Default Charge  is required"),
    gstClientId:Yup.string().required("GST Client  is required"),
    serviceCategoryId:Yup.number().required("Statservice Category is required")

})