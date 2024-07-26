import React from 'react';
import { Button, Card, Form, Input, Space } from 'antd';
const App = () => (
  <>
    <Card
      style={{
        maxWidth: "800px",
        marginLeft: "250px",
        border: "2px solid black",
        background: "black"
      }}>
      <Space
        style={{
          fontSize: "40px",
          color: "white",
          margin: "10px",
          marginLeft: "250px"
        }}>
        Login Page</Space>
      <Form labelCol={{
        span: 8,
      }}
        style={{
          maxWidth: "600px",
          textAlign: "center"
        }}>
        <Form.Item
          label="Email"
          name="email"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </>
);
export default App;