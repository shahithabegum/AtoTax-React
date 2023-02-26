import * as Yup from 'yup';

export const Gstlistschema=Yup.object().shape({
    proprietorName: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
         gstin: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
         statusId: Yup.number()
        .required('Required'),
        gstRegDate: Yup.date()
        .required('Required'),
         contactName: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
         gstUserName: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
         ewayBillUserName: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
         gstEmailId: Yup.string().email('Invalid email address').required('Required'),
         contactEmailId: Yup.string().email('Invalid email address').required('Required'),
         gstRecoveryEmailId: Yup.string().email('Invalid email address').required('Required'),
})