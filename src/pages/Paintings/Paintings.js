import React from 'react';
import styles from './Paintings.module.scss';
import data from './../../data/data.json';
import ImagesCarousel from './../../components/ImagesCarousel/ImagesCarousel';



function Paintings() {

  let getImage = (image) => {

    switch (image) {
        case "racoon":
            return require("../../images/racoon.png")
            break;
  
        default:
            return require("../../images/meditation.png");
            break;
    }
  }

  return (
    <div className={styles.root}>
        <h2>Paintings</h2>
        <div>On this page you can choose the size of the paintings</div>
            <div className={styles.badgeWrapper}>

            <input name="sold" type="checkbox"/>
            <label for="sold">Sold</label>
            <input name="avalable" type="checkbox" />
            <label for="avalable">Avalable</label>

            <input name="small" type="checkbox"/>
            <label for="small">Small</label>
            <input name="medium" type="checkbox" />
            <label for="medium">Medium</label>
            <input name="large" type="checkbox" />
            <label for="large">Large</label>
        </div>
        <div className={styles.contentWrapper}>
          <ImagesCarousel />
            {data.map(item => (
                <div className={styles.imageWrapper}>
                  <div key={item.name}>{item.name}</div>
                  <img className={styles.image} src={getImage(item.filename)} alt={item.discription}></img>
              </div>
            ))}
        </div>
    </div>
  );
}
export default Paintings;