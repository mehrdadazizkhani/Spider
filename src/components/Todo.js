import React from 'react';
import styles from './Todo.module.css'
import TodoCart from './TodoCart';

const Todo = () => {

    return (
        <section className={styles.container}>
            <header className={styles.header}></header>
            <section className={styles.body}>
                <TodoCart/>
                <TodoCart/>
                <TodoCart/>
                <TodoCart/>
                <TodoCart/>
                <TodoCart/>
                <TodoCart/>
                <TodoCart/>
                <TodoCart/>
            </section>
        </section>
    );
};

export default Todo;