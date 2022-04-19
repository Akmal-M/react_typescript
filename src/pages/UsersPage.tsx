import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import UserItem from "../components/UserItem";
import List from "../components/List";
import {useNavigate} from "react-router-dom";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const  navigate = useNavigate()

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (err) {
            alert(err)
        }
    }
    return (
        <div>
            <List
                items={users}
                renderItem={(user: IUser) => <UserItem user={user} key={user.id} onClick={(user) => navigate('/users/' + user.id)}/>}
            />
        </div>
    );
};

export default UsersPage;