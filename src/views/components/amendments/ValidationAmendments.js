import * as Yup from 'yup';
export const ValidationAmendments=Yup.object().shape({
    arn:Yup.string().max(250, 'Must be 250 characters or less').required("ARN  is required"),
    gstClientId:Yup.string().required("GST Client is required"),
    amendTypeId:Yup.number().required("Amend Type is required"),
    approvalStatusTypeId:Yup.number().required("Approval Status Type is required"),
    sumittedDate:Yup.date().required("Sumitted Date  is required"),
    approvedDate:Yup.date().required("Approved Date is required"),
    statusId:Yup.number().required("status Id is required")

})