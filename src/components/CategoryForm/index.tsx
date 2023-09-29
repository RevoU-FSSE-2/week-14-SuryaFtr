import { Select, Button, Input, Typography, Divider } from "antd"
import { useFormik } from "formik"
import { LoginForm as LoginFormProps } from "../../types"
import { initialValues, validationSchema } from "./loginFormSchema"

interface Props {
    onSubmit: (values: LoginFormProps) => void,
}

const CategoryForm = ({ onSubmit }: Props) => {

    const handleSubmit = (values: LoginFormProps) => {
        onSubmit(values)
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return (
        <form onSubmit={formMik.handleSubmit}>
            <div>
                <Typography.Paragraph>{'Category'}</Typography.Paragraph>
                <Input name={'category'}
                    value={formMik.values.category}
                    onChange={formMik.handleChange('category')}
                    status={formMik.errors.category && 'error'}
                />
                {formMik.errors.category && (
                    <Typography.Paragraph className={'error-message'}>{formMik.errors.category}</Typography.Paragraph>
                )}
            </div>
            <div>
                <Typography.Paragraph>{'Status'}</Typography.Paragraph>
                <Select placeholder="Select Status"
                    name={'status'}
                    value={formMik.values.status}
                    onChange={formMik.handleChange('status')}
                    status={formMik.errors.status && 'error'}
                >
                    <Select.Option value="true">Active</Select.Option>
                    <Select.Option value="false">Deactive</Select.Option>
                </Select>
                {formMik.errors.status && (
                    <Typography.Paragraph className={'error-message'}>{formMik.errors.status}</Typography.Paragraph>
                )}
            </div>
            <Divider />
            <div className={"item-right"}>
                <Button type={'primary'} htmlType={"submit"}>Submit</Button>
            </div>
        </form>
    )
}

export default CategoryForm