import React, { useEffect } from 'react'
import styles from './Basket.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getBasketThunk } from '../../redux/reducers/basketSlice'
import BasketCard from './basketCard/Card'

const Basket = () => {

  const dispatch = useDispatch()

  const data = useSelector((state) => state.basket.cards)

  useEffect(() => {
    dispatch(getBasketThunk())
  }, [])



  return (
    <div className={styles.container}>
      {data?.map(item => <BasketCard item={item}/>)}
    </div>
  )
}

export default Basket