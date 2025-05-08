import React from 'react'
import styles from './Banner.module.scss'

const WelcomeBanner = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h5>Fixed-Height Slider</h5>
            <h5 id={styles.bottom}>Excellent bouquets for you</h5>
        </div>
    </div>
  )
}

export default WelcomeBanner