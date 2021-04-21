import * as yup from "yup";

export default yup.object().shape({
    username: yup.string().required("name is required").min(2, "name must be at least 2 chars long"),
    email: yup.string().email("must be a vaild email"),
    password: yup.string().required("must have a password").min(5, "needs to be 5 chars long"),
    tOS: yup.boolean().oneOf([true], "must accept terms of service"),
})