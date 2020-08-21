import React from 'react';
import avatar from './../../images/kat.png';
import styles from './Info.module.scss';

function Info() {
  return (
    <div className={styles.root}>
        <h2>About me</h2>
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <img src={avatar}/>
          </div>
          <div className={styles.about_text}>
            <p>My name’s Sveta, I was born on January 14, 1985.</p>
            <p>I was born and still live in Russia, but I really want to live in different countries.</p>
            <p>I like space, nature, music, cinema and art.</p>
            <p>I also like geometric shapes, minimalism, simplicity, light and shadow, sunny bunnies,
               reflections, colors. I like the design and the photo.</p>
            <p>I want scientists to find many different dimensions and that people live consciously.</p>
            <p></p>
          </div>
        </div>
        <p>And someday, the word "time" will not have such a fast vector as it’s now.</p>
        <h3 className={styles.h3}>My painting.</h3>
        <p className={styles.bottom_text}>I don’t aspire to paint, like professional 
          artists who have studied this for many years at universities. 
          I have no task to copy something or write something very similar to what
           I see in front of me. What for? A lot of people around do it perfectly! )</p>
        <p className={styles.bottom_text}>
        My painting is a reflection on life and time. About what will happen next and about awareness. 
        They will serve as an excellent guide in a state of altered consciousness in a state of meditation. 
        And also serve you as an excellent decoration of the interior: minimalistic and unusual.
        </p>
    </div>
  );
}
export default Info;