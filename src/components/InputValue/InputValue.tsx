import React, {ChangeEvent} from "react";
import styles from "./InputValue.module.css"

type InputPropsType = {
    description: string
    currentValue: string | number
    error: boolean
    onChangeValue: (value: string) => void
}

export const InputValue: React.FC<InputPropsType> = ({description, currentValue, onChangeValue, error}) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeValue(event.currentTarget.value)
    }

    const InputValueClass = error ? styles.input + ' ' + styles.error : styles.input;

    return (
        <div className={styles.container}>
            <span className={styles.span}>{description}</span>
            <input type={"number"} className={InputValueClass} onChange={onChangeInputHandler} value={currentValue}/>
        </div>
    )
}
