import { Select, Button, Input, Typography, Divider } from "antd"
import { Category as CategoryProps } from "../../types"

interface Props {
    onSubmit: (values: CategoryProps) => void,
}

const CategoryForm = ({ onSubmit }: Props) => {

    return (
        <form>
            <div>
                <Typography.Paragraph>{'Category Name'}</Typography.Paragraph>
                <Input placeholder={'Enter Category Name'}
                />
            </div>
            <div>
                <Typography.Paragraph>{'Status'}</Typography.Paragraph>
                <Select placeholder="Select Status">
                    <Select.Option value="true">Active</Select.Option>
                    <Select.Option value="false">Deactive</Select.Option>
                </Select>
            </div>
            <Divider />
            <div className={"item-right"}>
                <Button type={'primary'} htmlType={"submit"}>Submit</Button>
            </div>
        </form>
    )
}

export default CategoryForm