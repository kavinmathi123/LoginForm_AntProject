import axios from "axios";
import { Table, Button, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
function TableCurd() {
    const [isEditing, setIsEditing] = useState(false)
    const [editingStudent, setEditingStudent] = useState(null)
    const [dataSource, setDataSource] = useState(
        [
            {
                id: 1,
                name: "kavi",
                email: "kavi@gmail.com",
                address: "cbe"
            },
            {
                id: 2,
                name: "mathi",
                email: "mathi@gmail.com",
                address: "chennai"
            },
            {
                id: 3,
                name: "dhanu",
                email: "dhanu@gmail.com",
                address: "tiruppur"
            },
            {
                id: 4,
                name: "sri",
                email: "sri@gmail.com",
                address: "Banglore"
            }
        ]
    )
    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Name',
            dataIndex: 'name'
        },
        {
            key: '3',
            title: 'Email',
            dataIndex: 'email'
        },
        {
            key: '4',
            title: 'Address',
            dataIndex: 'address'
        },
        {
            key: '5',
            title: 'Actions',
            render: (record) => {
                return (
                    <>
                        <EditOutlined onClick={() => { onEditStudent(record) }} />
                        <DeleteOutlined onClick={() => { onDeleteStudent(record) }} style={{ color: "red", marginLeft: 12 }} />
                    </>
                )
            }
        }
    ]
    const onAddStudent = () => {
        const randomNumber = parseInt(Math.random() * 1000);
        const newStudent = {
            id: randomNumber,
            name: "name" + randomNumber,
            email: randomNumber + "@gmail.com",
            address: "address" + randomNumber,
        }
        setDataSource(pre => {
            return [...pre, newStudent]
        })
    }
    const onDeleteStudent = (record) => {
        Modal.confirm({
            title: 'Are you sure',
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                setDataSource(pre => {
                    return pre.filter(student => student.id !== record.id)
                })
            }
        })

    }
    const onEditStudent = (record) => {
        setIsEditing(true);
        setEditingStudent(...record)
    }
    return (
        <>
            <div>
                <Button onClick={onAddStudent}>Add new Student</Button>
                <Table
                    const columns={columns}
                    dataSource={dataSource}
                >
                </Table>
                <Modal
                    title="Edit student"
                    visible={isEditing}
                    okText="Save"
                    onCancel={() => {
                        setIsEditing(false)
                    }}
                    onOk={() => {
                        setIsEditing(false)
                    }
                    }
                >
                    <Input value={editingStudent?.name} onChange={(e) => {
                        setEditingStudent(pre => {
                            return { ...pre, name: e.target.value }
                        })
                    }
                    } />
                    <Input value={editingStudent?.email} onChange={(e) => {
                        setEditingStudent(pre => {
                            return { ...pre, email: e.target.value }
                        })
                    }
                    } />
                    <Input value={editingStudent?.address} onChange={(e) => {
                        setEditingStudent(pre => {
                            return { ...pre, address: e.target.value }
                        })
                    }
                    } />
                </Modal>
            </div >
        </>
    );
}
export default TableCurd