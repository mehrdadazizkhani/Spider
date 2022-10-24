import React from 'react';
import { useState } from 'react';
import styles from './Calculator.module.css'

const Calcculator = () => {

    const [display, setDisplay] = useState("0")

    const showDisplay = (event) => {
        const x = event.target.innerText
        if (display == 0) {
            setDisplay(x)
        } else {
            setDisplay(prevDisplay => prevDisplay += x)
        }
    }

    const calculate = () => {
        let result = display
        setDisplay(eval(result))
    }

    const allClear = () => {
        setDisplay("0")
    }

    const clear = () => {
        let text = `${display}`
        if (text.length == 1) {
            allClear()
        } else {
            setDisplay(prevDisplay => prevDisplay = text.substring(0, text.length - 1))
        }
    }




    return (
        <div className={styles.container}>
            <div className={styles.display}>{display}</div>
            <div className={styles.keypad}>
                <table className={styles.keypadArea}>
                    <tbody>
                        <tr>
                            <td>
                                <div onClick={allClear} className={`${styles.key}`}>AC</div>
                            </td>
                            <td>
                                <div onClick={clear} className={`${styles.key}`}>C</div>
                            </td>
                            <td>
                                <div onClick={showDisplay} className={`${styles.key}`}>%</div>
                            </td>
                            <td>
                                <div onClick={showDisplay} className={`${styles.key}`}>/</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div onClick={showDisplay} className={`${styles.key}`}>7</div>
                            </td>
                            <td>
                                <div onClick={showDisplay} className={`${styles.key}`}>8</div>
                            </td>
                            <td>
                                <div onClick={showDisplay} className={`${styles.key}`}>9</div>
                            </td>
                            <td>
                                <div onClick={showDisplay} className={`${styles.key}`}>*</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div onClick={showDisplay} className={`${styles.key}`}>4</div>
                            </td>
                            <td>
                                <div onClick={showDisplay} className={`${styles.key}`}>5</div>
                            </td>
                            <td>
                                <div onClick={showDisplay} className={`${styles.key}`}>6</div>
                            </td>
                            <td>
                                <div onClick={showDisplay} className={`${styles.key}`}>-</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div onClick={showDisplay} className={`${styles.key}`}>1</div>
                            </td>
                            <td>
                                <div onClick={showDisplay} className={`${styles.key}`}>2</div>
                            </td>
                            <td>
                                <div onClick={showDisplay} className={`${styles.key}`}>3</div>
                            </td>
                            <td>
                                <div onClick={showDisplay} className={`${styles.key}`}>+</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div onClick={showDisplay} className={`${styles.key}`}>0</div>
                            </td>
                            <td>
                                <div onClick={showDisplay} className={`${styles.key}`}>.</div>
                            </td>
                            <td>
                                <div onClick={calculate} className={`${styles.key}`}>=</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Calcculator;