import React from "react";

import styles from './Cover.module.css';
import Webimage from '../images/image-web-3-desktop.jpg';

const Cover = () =>{
    return(
        <main className={styles.main}>
            <div>
                <div>
                    <img className={styles.image} src={Webimage} alt="cover"/>
                </div>
                <div className={styles.cover}>    
                    <div className={styles.title} >
                        <h1 >
                            The Bright Future of Web 3.0?
                        </h1>
                    </div>
                    <div className={styles.info} >
                        <p >
                            We dive into the next evolution of the web that 
                            claims to put the power of the platforms back 
                            into the hands of the people. But is it really 
                            fulfilling its promise? 
                        </p>
                        <button className={styles.btn}>READ MORE</button>
                    </div>
                </div>
            </div>
            <div className={styles.side}>
                <h2>New</h2>
                <div className={styles.sidebar}>
                    <div>
                        <h3>Hydrogen VS Electric Cars</h3>
                        <p>Will hydrogen-fueled cars ever catch up to EVs? </p>
                    </div>
                    <div className={styles.line}></div>
                    <div>
                        <h3>The Downsides of AI Artistry </h3>
                        <p>What are the possible adverse effects of on-demand AI image generation?</p>
                    </div>
                    <div className={styles.line}></div>
                    <div>
                        <h3>Is VC Funding Drying Up? </h3>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </div>
            </div>
       
        </main>
    )
}
export default Cover;