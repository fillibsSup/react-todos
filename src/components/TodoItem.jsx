import React from 'react';
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const Todo = ({todo, onTodoRemoval, onTodoToggle}) => {

    return (
        <List.Item
            actions={[
                <Tooltip
                title={todo.completed ? 'กดเพื่อยกเลิก' : 'กดเพื่อเสร็จสิ้น'}>
                <Switch
                    checkedChildren={<CheckOutlined/>}
                    unCheckedChildren={<CloseOutlined />}
                    onChange={() => onTodoToggle(todo)}
                    defaultChecked={todo.completed}
                />
                </Tooltip>,
                <Popconfirm
                description="คุณต้องการลบใช่ไหม"
                okText="ยืนยัน"
                cancelText="ไม่"
                onConfirm={() => {
                    onTodoRemoval(todo);
                }}>   
                    <Button className="remove-todo-button" type="primary" danger>
                        ลบ
                    </Button> 
                </Popconfirm>
            ]}
            className="list-item"
            key={todo.id}
            >
            <div className="todo-item">
                <Tag color={todo.completed ? 'cyan' : 'red'}> 
                    {todo.title}
                </Tag>
            </div>
        </List.Item>
    )
}

export default Todo;