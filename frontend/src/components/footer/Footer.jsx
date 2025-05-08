import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
        <footer>
            <div className={styles.col1}>
                <p>About</p>
                <h5>About us</h5>
                <h5>Our Partners</h5>
                <h5>Our Services</h5>
            </div>
            <div className={styles.col1}>
                <p>About</p>
                <h5>About us</h5>
                <h5>Our Partners</h5>
                <h5>Our Services</h5>
            </div>
            <div className={styles.col1}>
                <p>About</p>
                <h5>About us</h5>
                <h5>Our Partners</h5>
                <h5>Our Services</h5>
            </div>
        </footer>
    </div>
  )
}

export default Footer