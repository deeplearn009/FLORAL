import React from 'react'
import { Link } from 'react-router'
import styles from './Header.module.scss'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.logo}>
          <Link to={'/'}>Floral Studio</Link>
        </div>
        <nav>
          <Link>Home</Link>
          <a href="#">About Us</a>
          <a href="#">Portfolio</a>
          <a href="#">Pricing</a>
          <a href="#">Contacts</a>
        </nav>
        <div className={styles.burger}>
          <GiHamburgerMenu size={20} color='white'/>
        </div>
      </header>
    </div>
  )
}

export default Header