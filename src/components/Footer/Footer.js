import React from 'react';
import styles from './Footer.module.scss';
import instagram from './../../images/instagram.svg';
import facebook from './../../images/facebook.svg';
import watsapp from './../../images/watsapp.svg';
import vk from './../../images/vk.svg';
import etsy from './../../images/etsy.svg';
import email from './../../images/email.svg';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

let etsyFooterLink = classNames(`${styles.footerlink}`, `${styles.etsy}`);

function Footer() {
  return (
    <footer className={styles.root}>
        <div className={styles.linkWrapper}>
            <a href="https://www.instagram.com/sl.fineart/" target="_blank"><img className={styles.footerlink} src={instagram} alt="Svetlana Lebedeva's instagram"></img></a>
            <a href="https://www.facebook.com/Sl.Fineart85/" target="_blank"><img  className={styles.footerlink} src={facebook} alt="Svetlana Lebedeva's facebook"></img></a>
            <a href="https://wa.me/79045126424/?text=Type%20your%20message%20here" target="_blank"><img className={styles.footerlink}  src={watsapp} alt="write a message or call Svetlana Lebedeva by watsapp"></img></a>
            <a href="https://vk.com/slebedeva8" target="_blank"><img src={vk} className={styles.footerlink}  alt="Svetlana Lebedeva's vkontakte profile - russian social network"></img></a>
            <a href="https://www.etsy.com/people/SVento" target="_blank"><img src={etsyFooterLink} className={i} alt="watch all Svetlana Lebedeva's art works on etsy.com"></img></a>
            <a href="mailto:s.vento85@gmail.com" target="_blank"><img className={styles.footerlink}  src={email} alt="email to Svetlana Lebedeva"></img></a>
        </div>
        <div>Developed by <a className={styles.link} href="http://www.erazina.info">Elina</a>, designed by <Link to="/"className={styles.link}>Sl•</Link></div>
        <div>St. Petersburg, 2020</div>
    </footer>
  );
}
export default Footer;