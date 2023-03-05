import * as Yup from 'yup';
 const AddressExValidation=Yup.object().shape({
    gstClientId:Yup.string().required("GST ClientId Name is required"),
    addressTypeId:Yup.number().required("Address Type  is required"),
    addressLine1:Yup.string().max(250, 'Must be 250 characters or less').required("Address  is required"),
    city:Yup.string().max(250, 'Must be 250 characters or less').required("City  is required"),
    state:Yup.string().max(250, 'Must be 250 characters or less').required("State Type  is required"),
    pincode:Yup.string().max(250, 'Must be 250 characters or less').required("Pincode Type  is required"),
    statusId:Yup.number().required("Status is required")

})
export default AddressExValidation;