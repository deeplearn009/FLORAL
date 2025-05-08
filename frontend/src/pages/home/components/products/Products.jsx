import React, { useEffect } from 'react'
import styles from './Products.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCardsThunk } from '../../../../redux/reducers/cardSlice'
import Card from './components/Card/Card'

const Products = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => state.cards.cards)

    useEffect(() => {
        dispatch(getCardsThunk())
    }, [])

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.title}>
                <h3 id={styles.top}>Devoted to wonderful beauty</h3>
                <h3>Flowers Pricing</h3>
            </div>
            <div className={styles.cards}>
                {data?.map(item => <Card item={item}/>)}
            </div>
        </div>
    </div>
  )
}

export default Products