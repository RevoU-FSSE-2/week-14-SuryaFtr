import * as yup from 'yup'

export const initialValues = {
    email: '',
    password: ''
}

export const validationSchema = yup.object({
    email: yup.string()
        .email('Invalid email format')
        .required('Please input your Email!'),
    password: yup.string()
        .required('Please input your Password!')
})