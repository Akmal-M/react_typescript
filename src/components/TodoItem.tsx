import React, {FC} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
    <div>
        <div style={{padding: 15, border: '1px solid gray'}}>
            <input readOnly type="checkbox" checked={todo.completed}/>
            {todo.id}. {todo.title}
        </div>
    </div>
    );
};

export default TodoItem;