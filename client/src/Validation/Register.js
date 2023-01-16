import * as yup from 'yup'
export const RegisterSchema=yup.object().shape({
    username:yup.string().required(),
    email:yup.string().email().required(),
    password:yup.string().min(4).max(10).required()
})