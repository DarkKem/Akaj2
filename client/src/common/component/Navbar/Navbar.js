import React from 'react';
import {Link} from "react-router-dom";
import style from "./Navbar.module.scss";
import {isAdmin} from '../../utils/HonneyPot';

const Navbar = () => {
    return (
        <nav className={style.container}>
            <p style={{color: "white"}}>Slay the M.S.T</p>
            {isAdmin()}
            <Link className={style.AppLink} to={"/"}>Home</Link>
            <Link className={style.AppLink} to={"/game"}>GamePage</Link>
            <Link className={style.AppLink} to={"/welcome"}>Welcome</Link>
            <Link className={style.AppLink} to={"/classement"}>Classement</Link>
        </nav>
    );
};

export default Navbar;