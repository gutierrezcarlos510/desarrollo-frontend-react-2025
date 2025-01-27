import { motion } from "motion/react"
import {resetForm} from "../../store/features/form/formSlice.js";
import {useDispatch} from "react-redux";

// eslint-disable-next-line react/prop-types
const ModalLogout = ({ visible, message, onClose }) => {
    const dispatch = useDispatch();
    if (!visible) {
        return null;
    }
    const handleLogout = () => {
        dispatch(resetForm());
        onClose();
    }
    return (
        <div className="modal-overlay">
            <motion.div
                className="p-5 alert alert-danger"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div>
                    <div>
                        <p>{message}</p>
                    </div>
                    <button
                        className="close-btn-success"
                        onClick={onClose}>
                        X
                    </button>
                </div>
                <div className="text-center">
                    <button className="btn btn-danger" onClick={handleLogout}>Presionar para salir</button>
                </div>
            </motion.div>
        </div>
    );
};

export default ModalLogout;