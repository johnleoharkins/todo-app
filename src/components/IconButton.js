import React from "react";
import classes from "./IconButton.module.css"

export const IconButton = ({svg, onClick}) => {
    return(
        <div onClick={onClick} className={classes.IconButton__container}>
            <img src={svg} className={classes.IconButton__svg} />
        </div>
    )
}

export default IconButton;