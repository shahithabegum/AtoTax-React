import * as Yup from 'yup';
export const AmendValidation=Yup.object().shape({
    amendTypeName:Yup.string().max(250, 'Must be 250 characters or less').required("AmendType Name is required"),
    statusId:Yup.number().required("Status is required")

})