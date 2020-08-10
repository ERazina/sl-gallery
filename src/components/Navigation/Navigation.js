import React, {useState} from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from "react-router-dom";

function Navigation() {

    let menu = [
        {
        id: 1,
        name: 'paintings',
        },
        {
        id: 2,
        name: 'contact',
        },
        {
        id:3, 
        name: 'info',
        }
    ];
    

  return (
    <nav className={styles.root}>
        <ul className={styles.list}>
            {menu.map(listItem =>  
                (<li key={listItem.id} className={styles.bullet}>
                    <NavLink 
                    to={listItem.name}
                    className={styles.link}
                    activeClassName={styles.active}>{listItem.name} 
                    </NavLink>
                </li>))
            }
        </ul>
    </nav>
  );
}
export default Navigation;