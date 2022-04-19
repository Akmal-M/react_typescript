import React from 'react';
// import Card, {CardVariant} from "./components/Card";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import TodoPage from "./pages/TodosPage";
import CardPage from "./pages/CardPage";
import NavLinks from "./components/NavLinks";
import UserInfoPage from "./pages/UserInfoPage";

const App = () => {


    return (
        <BrowserRouter>
            <NavLinks/>
            <Routes>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/users/:id'} element={<UserInfoPage/>}/>
                <Route path={'/todos'} element={<TodoPage/>}/>
                <Route path={'/events'} element={<EventsExample/>}/>
                <Route path={'/'} element={<CardPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;