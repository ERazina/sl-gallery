import React from 'react';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import eye from '../../images/eye.svg';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.root}>
        <img src={logo} className={styles.logo} alt="logo Svetlana Lebedeva"></img>
        <span>Svetlana Lebedeva</span>
        <img src={eye} alt="logo Svetlana Lebedeva"></img>
        <Navigation />
    </div>
  );
}
export default Header;