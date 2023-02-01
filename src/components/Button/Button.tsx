import React from "react";
import styles from "./Button.module.css"

type ButtonPropsType = {
    name: string
    handler: (name: string) => void
}

export const Button: React.FC<ButtonPropsType> = ({name, handler}) => {
    return (
        <button onClick={() => handler(name)} className={styles.button}>{name} </button>
    )
}