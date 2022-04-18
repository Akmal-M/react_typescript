import React, {useEffect, useState} from 'react';
// import Card, {CardVariant} from "./components/Card";
import {ITodo, IUser} from "./types/types";
import axios from 'axios'
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";


const App = () => {



    const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, [])

   async function fetchUsers() {
       try {
           const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
           setUsers(response.data)
       } catch (err) {
           alert(err)
       }
    }

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
            setTodos(response.data)
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            <EventsExample/>
            {/*<Card onClick={(num) => console.log('clicked', num)} variant={CardVariant.outlined} width='200px'*/}
            {/*      height='200px'>*/}
            {/*    <button>Button</button>*/}
            {/*    <div>typescript</div>*/}
            {/*</Card>*/}
            <List
                items={users}
                renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
                />
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
            />
        </div>
    );
};

export default App;