import * as Yup from 'yup';
 const ChangePasswordValidation=Yup.object().shape({
    email:Yup.string().email().required("Email is required"),
    oldpassword:Yup.string().required("Old Password is required"),
    newPassword:Yup.string().required("New Password is required"),
    confirmPassword:Yup.string().required("Old Password is required").oneOf([Yup.ref('newPassword')], 'Passwords must match')
})
export default ChangePasswordValidation;