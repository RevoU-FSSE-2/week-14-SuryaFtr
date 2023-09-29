import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
    {
        label: 'Category List',
        key: '/'
    },
    {
        label: 'Logout',
        key: '/login'
    },
]

const Navbar = () => {
    const navigate = useNavigate();
    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key == '/login') {
            localStorage.removeItem("token");
            window.location.replace(e.key)
        }
        navigate(e.key)
    };


    return (
        <>
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                onClick={onClick}
                items={items} />
        </>
    )
}

export default Navbar