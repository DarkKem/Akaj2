import style from './App.module.scss';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Classement from "./common/page/Classement/Classement";
import Home from "./common/page/Home/Home";
import {ToastContainer} from 'react-toastify'
import Welcome from "./common/page/Welcome/Welcome";
import Navbar from "./common/component/Navbar/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import {AuthProvider} from "./common/context/Auth/AuthContext";
import {GameProvider} from "./common/context/Game/GameContext";

const excludedPath = ["/game"]

function App() {
    return (
        <AuthProvider>
            <GameProvider>
                <Router>
                    <div className={style.App}>
                        <header className={style.AppHeader}>
                            {excludedPath.includes(window.location.pathname) ? null : <Navbar/>}
                        </header>
                        <Routes>
                            <Route exact path={"/"} element={<Welcome/>}/>
                            <Route path={"/game"} element={<Home/>}/>
                            <Route path={"/classement"} element={<Classement/>}/>
                        </Routes>
                    </div>
                    <ToastContainer theme={"dark"} autoClose={false}/>
                </Router>
            </GameProvider>
        </AuthProvider>
    );
}

export default App;
