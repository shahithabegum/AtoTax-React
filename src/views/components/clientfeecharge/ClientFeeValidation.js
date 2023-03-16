import * as Yup from 'yup';
export const ClientFeeValidation=Yup.object().shape({
  
    defaultCharge:Yup.number().required("Default Charge  is required"),
    gstClientId:Yup.string().required("GST Client  is required"),
    returnFrequencyTypeId:Yup.number().required("Return Frequency Type is required")

})