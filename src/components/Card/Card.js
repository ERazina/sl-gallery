import React from 'react';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import celestial from './../../images/celestial.jpg';


function Card() {
  return (
    <div className={styles.root}>
        <h2 className={styles.h2}>Celestial battle</h2>
        {/* //picture with slider */}
        <img src={celestial} alt="picture celestial battle" className={styles.image}/>
        <div className={styles.card_info}>
            <div className={styles.price}>
                <div className={styles.details}>
                    Oil, canvas, 30 x 40 cm, 2018
                </div>
                <div>600$</div>
            </div>
            <div className={styles.buy}>
            <a href="https://wa.me/79045126424/?text=Type%20your%20message%20here" target="_blank" className={styles.link}>I take it</a>
            </div>
        </div>
    </div>
  );
}
export default Card;