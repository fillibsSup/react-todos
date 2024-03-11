import React  from 'react';
import {List} from 'antd';
import TodoItem from './TodoItem';

const TodoTab = ({ todos, onTodoRemoval, onTodoToggle }) => {
    return (
        <><List
            locale={{ emptyText: "ชีวิตนี้ต้องการทำอะไรบ้างไหม?", }}
            dataSource={todos}
            renderItem={(todo) => (
                <TodoItem
                    todo={todo}
                    onTodoToggle={onTodoToggle}
                    onTodoRemoval={onTodoRemoval}
                />
            )}  
            pagination={{
                position: 'bottom',
                pageSize: 8,
            }}             
        /></>
    )
}

export default TodoTab;