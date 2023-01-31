import React from "react";
import ReactDOM from "react-dom";
import classes from "./Overlay.module.css"
import NewTodoForm from "./NewTodoForm";



const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )
}

const Overlay = (props) => {
    return(
        <React.Fragment>
            <div className={classes.overlay} >
                { ReactDOM.createPortal(props.form(), document.getElementById("overlay"))}

            </div>

            { ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById("backdrop"))}
        </React.Fragment>

    )
}

export default Overlay;