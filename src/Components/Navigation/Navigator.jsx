import { Link } from "react-router";
import {useSelector} from "react-redux";
import {useState} from "react";
import ModalLogout from "../Modals/ModalLogout.jsx";

const Navigator = () => {
    const textUserSession = useSelector((state) => state.form.textUserSession);
    const isLogged = useSelector((state) => state.form.isLogged);
    const [flagModalLogout, setFlagModalLogout] = useState(false);
    function onOpenModalLogout() {
        setFlagModalLogout(true);
    }
    function onCloseModalLogout() {
        setFlagModalLogout(false);
    }
    return (
        <>
            <ModalLogout
                visible={flagModalLogout}
                message="¿Estás seguto de que quieres cerrar sesión?"
                onClose={onCloseModalLogout}
            />
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="30" height="30"
                     className="d-inline-block align-top" alt=""/>
                <a className="navbar-brand" href="#">React.js</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a href="#" className="nav-link">
                                <Link className="nav-link" to="/">Home</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link"><Link className="nav-link" to="/login">Login</Link></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link"><Link className="nav-link" to="/counter">Counter</Link></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link"><Link className="nav-link" to="/think">Think</Link></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link"><Link className="nav-link"
                                                                   to="/products">Product</Link></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link"><Link className="nav-link" to="/about">About</Link></a>
                        </li>
                    </ul>
                </div>
                <span className="navbar-text">
                        {textUserSession}
                </span>
                <button className={isLogged ? "btn btn-danger show" : "btn btn-danger visually-hidden"} onClick={onOpenModalLogout}>Logout</button>
            </nav>
        </>
    );
}

export default Navigator;