import * as Yup from 'yup';

export const Gstlistschema=Yup.object().shape({
    proprietorName: Yup.string()
         .max(250, 'Must be 250 characters or less')
         .required('Required'),
         gstin: Yup.string()
         .max(250, 'Must be 250 characters or less')
         .required('Required'),
         statusId: Yup.number()
        .required('Required'),
        gstRegDate: Yup.date()
        .required('Required'),
        phoneNumber: Yup.string()
         .max(10, 'Must be 10 characters or less')
         .required('Required'),
         gstUserName: Yup.string()
         .max(250, 'Must be 250 characters or less')
        ,
         ewayBillUserName: Yup.string()
         .max(250, 'Must be 250 characters or less')
        ,
         gstEmailId: Yup.string().email('Invalid email address').required('Required'),
         contactEmailId: Yup.string().email('Invalid email address'),
         gstRecoveryEmailId: Yup.string().email('Invalid email address'),
})