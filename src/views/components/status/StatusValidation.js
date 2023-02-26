import * as Yup from 'yup';
export const StatusValidation=Yup.object().shape({
    statusId:Yup.number().required("Status is required")

})