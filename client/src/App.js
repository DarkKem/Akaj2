import logo from './logo.svg';
import style from './App.module.scss';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Classement from "./common/page/Classement/Classement";
import Home from "./common/page/Home/Home";
import {ToastContainer} from 'react-toastify'

function App() {
    return (
        <Router>
            <div className={style.App}>
                <header className={style.AppHeader}>
                    <div>
                        <img src={logo} className={style.AppLogo} alt="logo"/>
                        <h1 className={style.AppTitle}>Welcome to MERN Chat app</h1>
                    </div>
                    <div className={style.AppContainerLink}>
                        <Link className={style.AppLink} to={"/"}>Home</Link>
                        <Link className={style.AppLink} to={"/classement"}>Classement</Link>
                    </div>
                </header>
                <Routes>
                    <Route exact path={"/"} element={<Home/>}/>
                    <Route path={"/classement"} element={<Classement/>}/>
                </Routes>
            </div>
            <ToastContainer theme={"dark"}/>
        </Router>
    );
}

export default App;
