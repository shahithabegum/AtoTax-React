import * as Yup from 'yup';
 const PaymentValidation=Yup.object().shape({
    paymentMethod:Yup.string().max(15, 'Must be 15 characters or less').required("Payment Method  is required"),
    statusId:Yup.number().required("Status is required")

})
export default PaymentValidation;