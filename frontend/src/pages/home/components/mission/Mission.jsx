import React from 'react'
import styles from './Mission.module.scss'

const Mission = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.left}>
                <div className={styles.titles}>
                    <h5>Our Mission</h5>
                    <p>Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.</p>
                    <button>Read More</button>
                </div>
            </div>
            <div className={styles.right}>
                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Mission