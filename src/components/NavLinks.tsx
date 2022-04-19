import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const NavLinks: FC = () => {
    return (
        <div style={{display:"flex", justifyContent:"space-between", width:"400px", fontSize:"37px", marginBottom:"20px", marginLeft:"20px" }}>
            <NavLink to={'/users'} style={{ textDecoration: 'none',color:"yellowgreen" }}>Users</NavLink>
            <NavLink to={'/todos'} style={{ textDecoration: 'none',color:"yellowgreen" }}>Todos</NavLink>
            <NavLink to={'/events'} style={{ textDecoration: 'none',color:"yellowgreen" }}>Events</NavLink>
        </div>
    );
};

export default NavLinks;