import * as Yup from 'yup';
 const JobValidation=Yup.object().shape({
    jobRole:Yup.string().max(15, 'Must be 15 characters or less').required("Job Role Name is required"),
    jobDescription:Yup.string().max(250, 'Must be 15 characters or less').required("job Description  is required"),
    statusId:Yup.number().required("Status is required")

})
export default JobValidation;