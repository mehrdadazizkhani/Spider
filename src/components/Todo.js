import React from 'react';
import styles from './Todo.module.css'
import TodoCart from './TodoCart';

const Todo = () => {

    const colorPicker = () => {

    }

    const colorHandler = (event) => {
        console.log(event.target.value)
    }

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <input className={styles.input} type="text" />
                <div onClick={colorPicker} className={styles.select}>
                    <option onClick={colorHandler} value=""></option>
                    <option onClick={colorHandler} value=""></option>
                    <option onClick={colorHandler} value=""></option>
                    <option onClick={colorHandler} value=""></option>
                </div>
                <button className={styles.button}>Add</button>
            </header>
            <section className={styles.body}>
                <TodoCart/>
            </section>
        </section>
    );
};

export default Todo;