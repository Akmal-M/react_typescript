import React, {FC} from 'react';
import {ITodo} from "../types/types";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todo: ITodo[]
}

const TodoList: FC<TodoListProps> = ({todo}) => {
    return (
        <div>
            { todo.map(todo =>
                <TodoItem key={todo.id} todo={todo}/>
            )}
        </div>
    );
};

export default TodoList;