import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

interface UserInfoPageParams {
    id: string;
}

const UserInfoPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    // @ts-ignore
    const params = useParams<UserInfoPageParams>()

    const navigate = useNavigate()


    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (err) {
            alert(err)
        }
    }
    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>Page of {user?.name}</h1>
            <div>{user?.email}</div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserInfoPage;