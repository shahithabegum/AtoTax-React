import * as Yup from 'yup';
 const EmployeeValidation=Yup.object().shape({
    firstName:Yup.string().max(50, 'Must be 50 characters or less').required("First Name is required"),
    lastName:Yup.string().max(50, 'Must be 50 characters or less').required("Last Name  is required"),
    dob:Yup.date().required("DOB is required"),
    empJobRoleId:Yup.number().required("Job Role is required"),
    statusId:Yup.number().required("Status is required")

})
export default EmployeeValidation;