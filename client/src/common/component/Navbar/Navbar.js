import React from 'react';
import {Link} from "react-router-dom";
import style from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={style.container}>
            <Link className={style.AppLink} to={"/game"}>GamePage</Link>
            <Link className={style.AppLink} to={"/welcome"}>Welcome</Link>
            <Link className={style.AppLink} to={"/classement"}>Classement</Link>
        </nav>
    );
};

export default Navbar;