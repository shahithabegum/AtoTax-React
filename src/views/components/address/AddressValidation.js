import * as Yup from 'yup';
const AddressValidation=Yup.object().shape({
    addressTypeName:Yup.string().max(250, 'Must be 250 characters or less').required("Address Type is required"),
    addressTypeDesc:Yup.string().max(250, 'Must be 15 characters or less').required("Address Type Desc is required"),
    statusId:Yup.number().required("Status is required")

})
export default AddressValidation;