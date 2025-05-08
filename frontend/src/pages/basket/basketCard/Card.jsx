import React from 'react'
import styles from './Card.module.scss'
import { useDispatch } from 'react-redux'
import { deleteBasketThunk } from '../../../redux/reducers/basketSlice'

const BasketCard = ({item}) => {

  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(deleteBasketThunk(item._id))
  }

  return (
    <div className={styles.card}>
        <div className={styles.img}>
            <img src={item.image} alt="" />
        </div>
        <div className={styles.description}>
            <p id={styles.name}>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => deleteProduct()}>Delete</button>
        </div>
    </div>
  )
}

export default BasketCard