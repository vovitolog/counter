import React, {ChangeEvent, useState} from "react";
import styles from "./InputValue.module.css"

type InputPropsType = {
    description: string
    currentValue: string
    onChangeValue: (value: string)=>void
}

export const InputValue: React.FC<InputPropsType> = ({description, currentValue, onChangeValue}) => {

   // const [value, setValue] = useState(currentValue);

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event.currentTarget.value)
        // console.log(typeof(event.currentTarget.value))
      //  setValue(event.currentTarget.value);
        onChangeValue(event.currentTarget.value)
    }

    return (
        <div className={styles.container}>
            <span className={styles.span}>{description}</span>
            <input type={"number"} className={styles.input} onChange={onChangeInputHandler} value={currentValue}/>
        </div>
    )
}