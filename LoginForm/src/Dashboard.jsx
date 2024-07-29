import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import Curd from './Curd';
import { Footer } from 'antd/es/layout/layout';
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
    const [selectKey, setSelectKey] = useState("1");

    const handleMenuClick = (e) => {
        setSelectKey(e.key);
    };

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: 'pink', height: "100px" }}>
                <img src="./public/AkhiraLogo.png" style={{ height: '40px' }} alt="Logo" />
            </Header>
            <Layout>
                <Sider>
                    <Menu
                        style={{ height: "150px" }}
                        onClick={handleMenuClick}
                        selectedKeys={[selectKey]}
                        items={[
                            { label: "Dashboard", key: "1" },
                            { label: "About", key: "2" }
                        ]}
                    />
                </Sider>
                <Content style={{ height: "150px" }}>
                    {
                        selectKey === '1' &&
                        <div style={{ textAlign: 'center' }}>
                            <Curd />
                        </div>
                    }
                    {
                        selectKey === '2' &&
                        <div style={{ textAlign: 'center' }}>
                            <h1>
                                Welcome to the About Page
                            </h1>
                        </div>
                    }
                </Content>
            </Layout>
            <Footer style={{ display: 'flex', alignItems: 'center', backgroundColor: 'pink', height: "100px" }}>
            </Footer>
        </Layout>
    );
};

export default Dashboard;
