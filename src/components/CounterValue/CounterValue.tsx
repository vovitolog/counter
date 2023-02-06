import React from 'react';
import styles from './CounterValue.module.css'

type NumberTypeProps = {
    value: string
}

export const CounterValue: React.FC<NumberTypeProps> = ({value}) => {
    return (
        <div className={styles.number}>
            {value}
        </div>
    );
};
