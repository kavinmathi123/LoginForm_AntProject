import React from 'react';
import { Button, Card, Form, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
    navigate('/dashboard');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f0f2f5' }}>
      <Card
        style={{
          maxWidth: '400px',
          width: '100%',
          border: '2px solid black',
          background: 'grey'
        }}
      >
        <Space
          style={{
            fontSize: '40px',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px'
          }}
        >
          Login Page
        </Space>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default App;
