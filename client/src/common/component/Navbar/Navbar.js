import React from 'react';
import {Link} from "react-router-dom";
import style from "./Navbar.module.scss";
import { isAdmin } from '../../utils/HonneyPot';
const Navbar = () => {
    return (
        <nav className={style.container}>
            {isAdmin()}
            <Link className={style.AppLink} to={"/"}>GamePage</Link>
            <Link className={style.AppLink} to={"/welcome"}>Welcome</Link>
            <Link className={style.AppLink} to={"/classement"}>Classement</Link>
        </nav>
    );
};

export default Navbar;