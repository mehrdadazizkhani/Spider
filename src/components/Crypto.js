import React from 'react';
import styles from './Crypto.module.css'
import Loading from './Loading';

const Crypto = () => {
    return (
        <div className={styles.container}>
            <Loading/>
        </div>
    );
};

export default Crypto;