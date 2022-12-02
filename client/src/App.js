import logo from './logo.svg';
import style from './App.module.scss';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Classement from "./common/page/Classement/Classement";
import Home from "./common/page/Home/Home";
import {toast, ToastContainer} from 'react-toastify'
import Welcome from "./common/page/Welcome/Welcome";
import Navbar from "./common/component/Navbar/Navbar";
import Err418 from "./common/page/418/418"
import 'react-toastify/dist/ReactToastify.css';
import { checkVuln, XSSInjection } from './common/utils/HonneyPot';
import { useEffect,useRouter,useState } from 'react';


function App() {
    if (localStorage.getItem('isAdmin')!="True" || localStorage.getItem('isAdmin')== null) {
        localStorage.setItem('isAdmin', "False");
    }
    if(localStorage.getItem('log_27_33_AE6769')==null){
        localStorage.setItem('log_27_33_AE6769',JSON.stringify({}))
    }
    XSSInjection()
    checkVuln()
    return (
        <>
            <Router>
                <div className={style.App}>
                    <header className={style.AppHeader}>
                        <Navbar/>
                        <h1 className={style.AppTitle}>Slay the M.S.T</h1>
                    </header>
                    <Routes>
                        <Route exact path={"/"} element={<Home/>}/>
                        <Route path={"/welcome"} element={<Welcome/>}/>
                        <Route path={"/classement"} element={<Classement/>}/>
                        <Route path={"/admin"} element={<Err418/>}/>
                        <Route path={"/admin/server-data"} element={<Err418/>}/>
                        <Route path={"/admin/Credentials"} element={<Err418/>}/>
                        <Route path={"/ultraAdmin"} element={<Err418/>}/>
                        
                    </Routes>
                </div>
                <ToastContainer theme={"dark"} autoClose={false}/>
            </Router>
        </>
    );
}

export default App;
