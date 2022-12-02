import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom'
import style from "./Success.module.scss";
import AuthContext from "../../context/Auth/AuthContext";
import baseApiUrl from "../../../config/baseApiUrl";
import axios from "axios"
import {toast} from 'react-toastify'

const Success = () => {
    const {user} = useContext(AuthContext)
    useEffect(() => {
        const registerUser = async () => {
            try {
                const res = await axios.post(baseApiUrl + "/user", user)
                console.log(res)
            } catch (e) {
                toast.error("Impossible d'inscrire cet utilisateur")
            }
        }
        registerUser()
    }, [user]);
    return (
        <div className={style.container}>
            <h1>Bravo tu as vaincu le dernier virus !</h1>
            <Link to={"/"}>Tu peux rejouer en cliquant ici</Link>
        </div>
    );
};

export default Success;