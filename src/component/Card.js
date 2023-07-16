import React,{Component} from "react";

import styles from './Card.module.css';

class Card extends Component{
    render(){
        const {image, number, header, details } = this.props;
        return(
            <div className={styles.container}>
                <img src={image} alt=""/>
                <div className={styles.info}>
                    <h2>{number}</h2>
                    <h3>{header}</h3>
                    <p>{details}</p>
                </div>
            </div>
        );
          
    }
}

export default Card;