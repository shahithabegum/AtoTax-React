import * as Yup from 'yup';
 const MediaValidation=Yup.object().shape({
    media:Yup.string().max(15, 'Must be 15 characters or less').required("Media Type Name is required"),
    description:Yup.string().max(50, 'Must be 15 characters or less').required("Media Type description is required"),
    statusId:Yup.number().required("Status is required")

})
export default MediaValidation;