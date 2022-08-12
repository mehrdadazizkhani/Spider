import React, { useState } from 'react';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    
    const rootElement = getComputedStyle(document.querySelector(':root'))
    const currentColor = rootElement.getPropertyValue('--color-accent')

    const [toggle, setToggle] = useState(false)
    const [color, setColor] = useState(currentColor.slice(1))
    const [hamburgerToggle, setHamburgerToggle] = useState(true)
    const [page, setPage] = useState(true)
    
    const toggleHandler = () => {
        setToggle(prevToggle => !prevToggle)
    }
    
    // Darkmode toggle
    
    if (toggle) {
        document.documentElement.style.setProperty('--color-primary', '#303234')
        document.documentElement.style.setProperty('--color-secondary', '#aaaaaa')
        document.documentElement.style.setProperty('--shadow-x', '#212324')
        document.documentElement.style.setProperty('--shadow-y', '#3f4244')
    } else {
        document.documentElement.style.setProperty('--color-primary', '#aaaaaa')
        document.documentElement.style.setProperty('--color-secondary', '#303234')
        document.documentElement.style.setProperty('--shadow-x', '#757575')
        document.documentElement.style.setProperty('--shadow-y', '#dfdfdf')
    }
    
    // Color picker
    
    const colorHandler = (event) => {
        setColor(prevColor => event.target.value)
        document.documentElement.style.setProperty('--color-accent', color)
    } 

    // Hamburger menu
    
    const resizeHandler = () => {
        if (window.innerWidth < 800) {
            setHamburgerToggle(false)
        } else {
            setHamburgerToggle(true)
        }
    }

    window.addEventListener('resize', resizeHandler)


    const menuHandler = () => {
        
        setHamburgerToggle(prevHamburgerToggle => !prevHamburgerToggle)
        
    }

    const homeHandler = () => {
        setPage(true)
    }

    const aboutHandler = () => {
        setPage(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.titleSec}>
                <i className="fa-solid fa-spider" id={styles['logo']}></i>
                <h1>spider</h1>
            </div>
            <div className={styles.navBarSec}>
                <div onClick={toggleHandler} className={styles.toggle}>
                    <div className={`${styles.toggleCircle} ${toggle ? '' : styles.toggleCircleActive }`}><i className={toggle ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}></i></div>
                </div>
                <input onChange={colorHandler} value={color} className={styles.colorPicker} type='color'></input>
                <ul className={`${styles.navBar} ${hamburgerToggle ? '' : styles.navClose}`}>
                    <li><Link className={page ? styles.buttonActivated : styles.buttonDeactivated} onClick={homeHandler} to='/'>Home</Link></li>
                    <li><Link className={page ? styles.buttonDeactivated : styles.buttonActivated} onClick={aboutHandler} to='/about'>About</Link></li>
                </ul>
                <div className={`${styles.hamburgerMenu} ${hamburgerToggle ? styles.hamClose : ''}`} onClick={menuHandler}>
                    <div className={styles.lines}></div>
                    <div className={styles.lines}></div>
                    <div className={styles.lines}></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;