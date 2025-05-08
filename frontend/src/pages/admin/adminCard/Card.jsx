import React from 'react'
import styles from './Card.module.scss'
import { useDispatch } from 'react-redux'
import { deleteCardThunk } from '../../../redux/reducers/cardSlice'

const AdminCard = ({item}) => {

  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(deleteCardThunk(item._id))
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

export default AdminCard