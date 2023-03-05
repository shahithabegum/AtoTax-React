import * as Yup from 'yup';
 const PaidDetailValidation=Yup.object().shape({
    gstClientID:Yup.string().max(250, 'Must be 250 characters or less').required("GST Client is required"),
    serviceCategoryId:Yup.number().required("Service Category is required"),
    paymentTypeId:Yup.number().required("Payment Type is required"),
    paymentDueMonth:Yup.string().required("Payment Due Month is required"),
    paymentDueYear:Yup.number().required("Payment Due Year is required"),
    amount:Yup.number().required("Amount is required")

})
export default PaidDetailValidation;