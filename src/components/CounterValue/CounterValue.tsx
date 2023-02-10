import React from 'react';
import styles from './CounterValue.module.css'

type CounterValueTypeProps = {
    value: string
    maximumReached: boolean
    error: boolean
}

export const CounterValue: React.FC<CounterValueTypeProps> = ({value, maximumReached, error}) => {

    // добавление класса при ошибке или достижении максимума
    const counterValueClass = maximumReached || error ? styles.number + ' ' + styles.maximum : styles.number;

    return (
        <div className={counterValueClass}>
            {value}
        </div>
    );
};
