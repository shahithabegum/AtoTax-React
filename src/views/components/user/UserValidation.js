import * as Yup from 'yup';
export const UserValidation=Yup.object().shape({
    newUserName:Yup.string().max(250, 'Must be 15 characters or less').required("User Name is required"),
    newName:Yup.string().max(250, 'Must be 15 characters or less').required("Name is required"),
    newEmail: Yup.string().email('Invalid email address').required('Email is Required'),
})