import * as Yup from 'yup';
export const UserValidation=Yup.object().shape({
    newUserName:Yup.string().max(250, 'Must be 15 characters or less'),
    newName:Yup.string().max(250, 'Must be 15 characters or less'),
    newEmail: Yup.string().email('Invalid email address'),
})