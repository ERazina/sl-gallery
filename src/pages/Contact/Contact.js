import React from 'react';
import styles from './Contact.module.scss';

function Contact() {
  return (
    <div className={styles.root}>
        <h2>Contact</h2>
        <p>I live in Russia, the city of St. Petersburg</p>
        <a mailto="s.vento85@gmail.com" target="_blank" className={styles.link}>s.vento85@gmail.com</a>
        <a href="https://www.instagram.com/sl.fineart/" target="_blank" className={styles.link}>www.instagram.com/sl.fineart/</a>
        <a href="https://www.facebook.com/Sl.Fineart85/" target="_blank" className={styles.link}>www.facebook.com/Sl.Fineart85/</a>
        <a href="https://vk.com/slebedeva8" target="_blank" className={styles.link}>vk.com/slebedeva8</a>
        <a href="https://wa.me/79045126424/?text=Type%20your%20message%20here" target="_blank" className={styles.link}>+7 (904) 512-64-24 (for WhatsApp)</a>
        <a></a>
    </div>
  );
}
export default Contact;