import React, { Component } from "react";

import Styles from './Codeby.module.css';
import Logo from '../images/chall.png';

class challenge extends Component{
    render(){
        return(
            <div className={Styles.challenge}>
                <img src={Logo} alt="" />
                <p>Challenge by <a href="https://www.frontendmentor.io">Front-end Mentor</a> Code By <a href="https://github.com/VAbrishamii">VAbrishamii</a></p>

            </div>
        )
    }
}
export default challenge;