import * as Yup from 'yup';
 const GSTFilingValidation=Yup.object().shape({
    filingType:Yup.string().max(250, 'Must be 15 characters or less').required("Filing Type  is required"),
    statusId:Yup.number().required("Status is required")

})
export default GSTFilingValidation;