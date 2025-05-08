import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCardsThunk = createAsyncThunk('/products/get', async () => {
    const res = await axios.get('http://localhost:7000/products')
    return res.data
})

export const postCardThunk = createAsyncThunk('/products/post', async (data) => {
    await axios.post('http://localhost:7000/products', data)
    return data
})

export const deleteCardThunk = createAsyncThunk('/products/delete', async (id) => {
    await axios.delete(`http://localhost:7000/products/${id}`)
    return id
})

const cardSlice = createSlice({
    name: "cards",
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder 

        .addCase(getCardsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getCardsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.cards = action.payload
        })
        .addCase(getCardsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default cardSlice.reducer