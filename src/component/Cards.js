import React, { Component } from "react";

import styles from './Cards.module.css';
import Card from "./Card";

import Ione from '../images/ione.jpg';
import Itwo from '../images/itwo.jpg';
import Ithree from '../images/ithree.jpg';



class Cards extends Component{
    render(){
        return(
            <div className={styles.container}>
             
                    <Card image={Ione} number='01' header='Reviving Retro PCs' details='What happens when olre given modern upgrades?'/>
                    <Card image={Itwo} number='02' header='Top 10 Laptops of 2022' details=' Our best picks for various needs and budgets.' /> 
                    <Card image={Ithree} number='03' header='The Growth of Gaming' details='How the pandemic has sparked fresh opportunities.' />
               
             
               
            </div>

        );
            
    }
}
export default Cards;