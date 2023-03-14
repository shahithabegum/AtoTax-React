import * as Yup from 'yup';
 const BillAndFeeCollectionValidation=Yup.object().shape({
    gstClientID:Yup.string().max(250, 'Must be 250 characters or less').required("GST Client is required"),
    serviceCategoryId:Yup.number().required("Service Category is required"),
    returnFrequencyTypeId:Yup.number().required("Return Frequency Type is required"),
    multimediaTypeId:Yup.number().required("Multi Media Type is required"),
    paymentDueMonth:Yup.string().required("Payment Due Month is required"),
    paymentDueYear:Yup.number().required("Payment Due Year is required"),
   

})
export default BillAndFeeCollectionValidation;