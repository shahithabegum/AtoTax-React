import * as Yup from 'yup';
const AddressValidation=Yup.object().shape({
    addressTypeName:Yup.string().max(15, 'Must be 15 characters or less').required("addressTypeName Name is required"),
    addressTypeDesc:Yup.string().max(30, 'Must be 15 characters or less').required("addressTypeDesc Name is required"),
    statusId:Yup.number().required("Status is required")

})
export default AddressValidation;