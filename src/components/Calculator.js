import React from 'react';
import styles from './Calculator.module.css'

const Calcculator = () => {
    return (
        <div className={styles.container}>
            <div className={styles.display}>0</div>
            <div className={styles.keypad}>
                <table className={styles.keypadArea}>
                    <tbody>
                        <tr>
                            <td>
                                <div className={`${styles.key}`}>AC</div>
                            </td>
                            <td>
                                <div className={`${styles.key}`}>C</div>
                            </td>
                            <td>
                                <div className={`${styles.key}`}>%</div>
                            </td>
                            <td>
                                <div className={`${styles.key}`}>/</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={`${styles.key}`}>7</div>
                            </td>
                            <td>
                                <div className={`${styles.key}`}>8</div>
                            </td>
                            <td>
                                <div className={`${styles.key}`}>9</div>
                            </td>
                            <td>
                                <div className={`${styles.key}`}>*</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={`${styles.key}`}>4</div>
                            </td>
                            <td>
                                <div className={`${styles.key}`}>5</div>
                            </td>
                            <td>
                                <div className={`${styles.key}`}>6</div>
                            </td>
                            <td>
                                <div className={`${styles.key}`}>-</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={`${styles.key}`}>1</div>
                            </td>
                            <td>
                                <div className={`${styles.key}`}>2</div>
                            </td>
                            <td>
                                <div className={`${styles.key}`}>3</div>
                            </td>
                            <td>
                                <div className={`${styles.key}`}>+</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div className={`${styles.key}`}>0</div>
                            </td>
                            <td>
                                <div className={`${styles.key}`}>.</div>
                            </td>
                            <td>
                                <div className={`${styles.key}`}>=</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Calcculator;