import React from 'react'
import styles from './Contacts.module.scss'

const Contacts = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.title}>
                    <h3 id={styles.top}>Contacts</h3>
                    <h3>Our Team</h3>
            </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
                    </div>
                    <div className={styles.description}>
                        <h5>Velva Kopf</h5>
                        <h6>Biologist</h6>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
                    </div>
                    <div className={styles.description}>
                        <h5>Velva Kopf</h5>
                        <h6>Biologist</h6>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
                    </div>
                    <div className={styles.description}>
                        <h5>Velva Kopf</h5>
                        <h6>Biologist</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts