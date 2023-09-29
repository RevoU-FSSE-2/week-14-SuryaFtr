import React from 'react';
import { Layout, theme } from 'antd';

const BaseHeader = Layout;

const Header: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <BaseHeader style={{ paddingLeft: 20, background: colorBgContainer }}>
            <h1>Category App</h1>
        </BaseHeader>
    )
}

export default Header