import React from 'react';
import styles from './Footer.module.scss';
import instagram from './../../images/instagram.svg';
import facebook from './../../images/facebook.svg';
import watsapp from './../../images/watsapp.svg';
import vk from './../../images/vk.svg';
import etsy from './../../images/etsy.svg';
import email from './../../images/email.svg';
import {Link} from 'react-router-dom';


function Footer() {
  return (
    <footer className={styles.root}>
        <div className={styles.linkWrapper}>
            <a href="https://www.instagram.com/sl.fineart/"><img className={styles.footerlink} src={instagram} alt="Svetlana Lebedeva's instagram"></img></a>
            <a href="https://www.facebook.com/Sl.Fineart85/"><img  className={styles.footerlink} src={facebook} alt="Svetlana Lebedeva's facebook"></img></a>
            <a href="https://www.instagram.com/sl.fineart/"><img className={styles.footerlink}  src={watsapp} alt="Svetlana Lebedeva's watsapp"></img></a>
            <a href="http://www.vk.com"><img src={vk} className={styles.footerlink}  alt="Svetlana Lebedeva's vkontakte russian social network"></img></a>
            <a href="http://www.etsy.com"><img src={etsy} className={styles.footerlink}  alt="Svetlana Lebedeva's etsy art site"></img></a>
            <a mailto="http://www.instagram.com"><img className={styles.footerlink}  src={email} alt="Svetlana Lebedeva email"></img></a>
        </div>
        <div>Developed by <a className={styles.link} href="http://www.erazina.info">Elina</a>, designed by <Link className={styles.link}>Sl•</Link></div>
        <div>St. Petersburg, 2020</div>
    </footer>
  );
}
export default Footer;