import * as Yup from 'yup';
export const RegisterValidation=Yup.object().shape({
    userName:Yup.string().max(250, 'Must be 15 characters or less').required("User Name is required"),
    name:Yup.string().max(250, 'Must be 15 characters or less').required("name Name is required"),
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    password: Yup.string().max(10, 'Must be 10 characters or less').required('Password is Required'),
})