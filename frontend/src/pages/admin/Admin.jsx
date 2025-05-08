import React, { useEffect } from 'react'
import styles from './Admin.module.scss'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { getCardsThunk, postCardThunk } from '../../redux/reducers/cardSlice'
import { useFormik } from 'formik'
import AdminCard from './adminCard/Card'
import { Link } from 'react-router'

const Admin = () => {

    const validationSchema = Yup.object({
        name: Yup.string().required("Name").min(2, "Short"),
        price: Yup.string().required("Price").min(2, "Short")
    })

    const dispatch = useDispatch()

    const data = useSelector((state) => state.cards.cards)

    useEffect(() => {
        dispatch(getCardsThunk())
    }, [])

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            image: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            dispatch(postCardThunk(values))
        },
    });

    
  return (
    <div className={styles.container}>
        <header>
            <Link to={'/'}>Go Home</Link>
        </header>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <label htmlFor="price">Price:</label>
            <input
                id="price"
                name="price"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.price}
            />
            <label htmlFor="image">Image:</label>
            <input
                id="image"
                name="image"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.image}
            />
            <button type="submit">Submit</button>
        </form>

        <div className={styles.cards}>
            {data?.map(item => <AdminCard item={item}/>)}
        </div>
    </div>
  )
}

export default Admin