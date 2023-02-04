import React from "react";
import styles from "./InputValue.module.css"

type InputPropsType = {
    description: string
}
export const InputValue: React.FC<InputPropsType> = ({description}) => {
    return (
        <div className={styles.container}>
            <span className={styles.span}>{description}</span>
            <input type={"number"} className={styles.input}/>
        </div>
    )
}