import React from "react";
import styles from "./Button.module.css"

type ButtonPropsType = {
    name: string
    disabled: boolean
    handler: () => void
}

export const Button: React.FC<ButtonPropsType> = ({name, handler, disabled}) => {
    return (
        <button onClick={handler} className={styles.button} disabled={disabled}>{name}</button>
    )
}