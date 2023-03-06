import * as Yup from 'yup';
 const RessetPasswordValidation=Yup.object().shape({
    newPassword:Yup.string().required("New Password is required"),
    confirmPassword:Yup.string().required("Confirm Password is required").oneOf([Yup.ref('newPassword')], 'Passwords must match')
})
export default RessetPasswordValidation;