import { Outlet } from 'react-router-dom';
import React from 'react';
import { Layout, theme } from 'antd';

const BaseContent = Layout;

const Content: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <BaseContent style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, minHeight: 480, background: colorBgContainer }}>
                <Outlet />
            </div>
        </BaseContent>
    )
}

export default Content