import {useEffect, useState} from "react";
import { motion } from "motion/react"
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";
import * as Icon from 'react-bootstrap-icons';
import {useDispatch, useSelector} from "react-redux";
import ModalDanger from "../Modals/ModalDanger.jsx";
import {changeForm, changeIsLogged, changeTextUserSession} from "../../store/features/form/formSlice.js";
// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({titleForm}) => {
    const data = useSelector((state) => state.form.data);
    const isLogged = useSelector((state) => state.form.isLogged);
    const dispatch = useDispatch();
    const {formData, handleChange, resetForm} = useForm({
        username: '',
        email: '',
        password:''
    });
    useEffect(() => {
        if(!isLogged){
            resetForm();//al resetear se vuelve a la configuracion inicial, pero el punto 3 y 7 del examen se contradicen, sin embargo se opto por seguir el punto 3
        }
    }, [isLogged]);
    const [showModal, setShowModal] = useState(false);
    const [showModalFailed, setShowModalFailed] = useState(false);
    const [flagViewPassword, setFlagViewPassword] = useState(false);
    const [textButtonPassword, setTextButtonPassword] = useState("Show");
    const [typePassword, setTypePassword] = useState("password");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(data.password === formData.password){
            setShowModal(true);
            formData.module = data.module;
            dispatch(changeForm(formData));
            dispatch(changeIsLogged(true));
            dispatch(changeTextUserSession("Bienvenido: " + formData.username + " | "+ formData.email));
        } else {
            setShowModalFailed(true);
            dispatch(changeIsLogged(false));
            dispatch(changeTextUserSession(""));
        }
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
    };
    const onCloseModalFailed = () => {
        setShowModalFailed(false);
    };
    const handleViewPassword = () => {
        setFlagViewPassword(!flagViewPassword);
        setTextButtonPassword(flagViewPassword === true ? "Show" : "Hide");
        setTypePassword(flagViewPassword === true ? "password" : "text");
    };

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <ModalInfo
                visible={showModal}
                message={`Bienvenido: ${formData.username}`}
                onClose={onCloseModalInfo}
            />
            <ModalDanger
                visible={showModalFailed}
                message="Username/Password incorrectos!!!"
                onClose={onCloseModalFailed}
            />
            <div className="row justify-content-center mt-4">
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        <motion.div
                            initial={{x: -100}}
                            animate={{x: 0}}
                            transition={{duration: 0.5}}
                        >
                            <h3>{titleForm}</h3>
                        </motion.div>
                        <motion.div
                            initial={{x: -100}}
                            animate={{x: 0}}
                            transition={{duration: 0.5}}
                        >
                            <div className={"form-group row py-3"}>
                                <label className={"col-2 col-form-label"}>
                                    Module:
                                </label>
                                <div className={"col-10"}>
                                    <input
                                        type="text"
                                        name="module"
                                        className={"form-control"}
                                        value={data.module}
                                        onChange={handleChange}
                                        disabled={"disabled"}
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{x: -100}}
                            animate={{x: 0}}
                            transition={{duration: 0.5}}
                        >
                            <div className={"form-group row  py-3"}>
                                <label className={"col-2 col-form-label"}>
                                    Username:
                                </label>
                                <div className={"col-10"}>
                                    <input
                                        type="text"
                                        name="username"
                                        className={"form-control"}
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{x: -100}}
                            animate={{x: 0}}
                            transition={{duration: 0.5}}
                        >
                            <div className={"form-group row py-3 py-3"}>
                                <label className={"col-2 col-form-label"}>
                                    Email:
                                </label>
                                <div className={"col-10"}>
                                    <input
                                        className={"form-control"}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{x: -100}}
                            animate={{x: 0}}
                            transition={{duration: 0.5}}
                        >
                            <div className={"input-group row py-3"}>
                                <label className={"col-2 col-form-label"}>
                                    Password:
                                </label>
                                <div className={"col-10"}>
                                    <div className="input-group">
                                        <input
                                            className={"form-control"}
                                            type={typePassword}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <div className="input-group-append">
                                            <button className={flagViewPassword === false ? "btn btn-success" : "btn btn-danger"} onClick={handleViewPassword} type="button">
                                                <Icon.Eye className={flagViewPassword === true ? "d-none" : ""}/>
                                                <Icon.EyeSlash className={flagViewPassword === false ? "d-none" : ""}/>
                                                {textButtonPassword}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className={"pt-2"}>
                            <motion.div
                                initial={{y: 100}}
                                animate={{y: 0}}
                                transition={{duration: 0.5}}
                            >
                            <button className={"btn btn-primary"} type="submit"><Icon.Send/> LOGIN</button>
                            </motion.div>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};
export default FormWithMotionAndHook;