import * as Yup from 'yup';
 const BillAndFeeCollectionValidation=Yup.object().shape({
    gstClientID:Yup.string().max(250, 'Must be 250 characters or less').required("GST Client is required"),
    serviceCategoryId:Yup.number().required("Service Category is required"),
    returnFrequencyTypeId:Yup.number().required("Return Frequency Type is required"),
    salesInvoice:Yup.boolean().required("Sales Invoice or sales Bills Nil is required"),
    purchaseInvoice:Yup.boolean().required("Purchase Invoice or Purchase Nil is required"),
    dueMonth:Yup.string().required("Payment Due Month is required"),
    gstTaxAmount:Yup.number().required("GST Tax Amount is required"),
   

})
export default BillAndFeeCollectionValidation;