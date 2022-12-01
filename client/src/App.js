import logo from './logo.svg';
import style from './App.module.scss';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Classement from "./common/page/Classement/Classement";
import Home from "./common/page/Home/Home";
import {ToastContainer} from 'react-toastify'
import Welcome from "./common/page/Welcome/Welcome";
import Navbar from "./common/component/Navbar/Navbar";
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
                    </Routes>
                </div>
                <ToastContainer theme={"dark"} autoClose={false}/>
            </Router>
        </>
    );
}

export default App;
