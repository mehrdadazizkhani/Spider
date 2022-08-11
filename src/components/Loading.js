import React from 'react';
import styles from './Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.container}>
            <i className="fa-solid fa-spider" id={styles['logo']}></i>
            <i className="fa-solid fa-spider" id={styles['logo']}></i>
            <i className="fa-solid fa-spider" id={styles['logo']}></i>
        </div>
    );
};

export default Loading;