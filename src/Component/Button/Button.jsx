import React from "react";
import styles from "./Button.module.css"

const getStyleForType=(type)=>{
    switch (type) {
        case "success":
            return {
                color: "green"
            }
        case "warning":
            return {
                color: "yellow"
            }
        case "error":
            return {
                color: "red"
            }
        default:
            return {}
    }

}
function Button(props) {
    const { title,type,disabled} = props;
    // const style ={
    //     padding: "1rem",
    //     margin: "0.25rem",
    //     minWidth: "10rem"
    // }
    console.log(styles)
    // 1. inline styles
    // !2. Common CSS
    // *3. module CSS

    const style = getStyleForType(type)
    return (
        //className
        <button disabled={disabled} className={styles.button} style={style}>{title}</button>
    )
}

export default Button