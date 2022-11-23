import React from 'react';
import styles from './TodoCart.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const TodoCart = () => {
    return (
        <section className={styles.container}>
            <div className={styles.todoContent}>
                <p className={styles.todoText}>todo text</p>
                <div className={styles.options}>
                    <FontAwesomeIcon className={styles.button} icon={solid('check')}/>
                    <FontAwesomeIcon className={styles.button} icon={solid('xmark')}/>
                </div>
            </div>
            <div className={styles.label}></div>
        </section>
    );
};

export default TodoCart;