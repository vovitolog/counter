import React from 'react';
import styles from './CounterValue.module.css'

type CounterValueTypeProps = {
    value: string
    maximumReached: boolean
}

export const CounterValue: React.FC<CounterValueTypeProps> = ({value, maximumReached}) => {

    const counterValueClass = maximumReached? styles.number + ' ' + styles.maximum: styles.number;

    return (
        <div className={counterValueClass}>
            {value}
        </div>
    );
};
