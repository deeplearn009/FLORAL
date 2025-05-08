import React, { useEffect } from 'react'
import styles from './Card.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getBasketThunk } from '../../../../../../redux/reducers/basketSlice'
import axios from 'axios'


const Card = ({item}) => {

  const addToBasket = async (data) => {
    const res = await axios.post("http://localhost:7000/basket/", data)
    return res.data
  }

  const dispatch = useDispatch()

  const data = useSelector((state) => state.cards.cards)

  useEffect(() => {
    dispatch(getBasketThunk())
  }, [])

  return (
    <div className={styles.card}>
        <div className={styles.img}>
            <img src={item.image} alt="" />
        </div>
        <div className={styles.description}>
            <p id={styles.name}>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => addToBasket(item)}>Add to Basket</button>
        </div>
    </div>
  )
}

export default Card