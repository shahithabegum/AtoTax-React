import * as Yup from 'yup';
 const ValidationService=Yup.object().shape({
    serviceName:Yup.string().max(250, 'Must be 250 characters or less').required("Service Name is required"),
    description:Yup.string().max(250, 'Must be 250 characters or less'),
    fixedCharge:Yup.number("Enter value in Rupees Formate").required("Fixed Charge  is required"),
    statusId:Yup.number().required("Status is required")

})
export default ValidationService;