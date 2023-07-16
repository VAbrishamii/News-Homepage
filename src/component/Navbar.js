import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../images/logo.svg';
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const clickHandeler = () => setClick(!click)

     return(
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt='w' />
                <ul className={click ? styles.list.active : styles.list} >
                    <div className={styles.hamburger} onClick={clickHandeler}>
                         {click ?  (<FaTimes size={40} style={{color:'#333', width:'100px'}}/>) : (<FaBars size={40} style={{color:'#333'}} />)}
                    </div>             
                    
                        <li>Home</li>
                        <li>New</li>
                        <li>Popular</li>
                        <li>Trending</li>
                        <li>Categories</li>
                   
                      
                </ul>
        </header>
    )
}
export default Navbar;