'use client'

import { MdDensityMedium, MdClear } from 'react-icons/md'
import { useState, useRef } from 'react'
import Logo from '../common/Logo/Logo'
import styles from './Header.module.css'

export default function Header (){

    const [active, setActive] = useState(true)
    let activeMenu = useRef()
    let iconMenu = active ? <MdDensityMedium/> : <MdClear/> 
    
    return(
        <header className={styles.header}>
            <Logo color="#34313D" />
            <nav className={styles.nav} ref={activeMenu}>
                <ul className={styles.listContainer} before=''>
                    <a href=''className={styles.list}><li>Features</li></a>
                    <a href=''className={styles.list}><li>Pricing</li></a>
                    <a href=''className={styles.list}><li>Resources</li></a>
                </ul>
                <div className={styles.buttonContainer}>
                    <a href='_blank' className={styles.login}>Login</a>
                    <button className={styles.signUp}>Sign Up</button>
                </div>
            </nav>
            <button className={styles.iconContainer}
                    onClick={(e) => {
                                        setActive(!active);
                                        activeMenu.current.classList.toggle(styles.active, active);
                                        
                                        /*if (active) activeMenu.current.classList.add(styles.active);    
                                        
                                        else activeMenu.current.classList.remove(styles.active);
                                        */
                                        
                    }}>
                <i className={styles.icon}>{iconMenu}</i>
            </button>
        </header>
    )
}
