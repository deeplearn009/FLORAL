import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getBasketThunk = createAsyncThunk('/basket/get', async () => {
    const res = await axios.get('http://localhost:7000/basket/')
    return res.data
})

export const postBasketThunk = createAsyncThunk('/basket/post', async (data) => {
    await axios.post('http://localhost:7000/basket/')
    return data
})

export const deleteBasketThunk = createAsyncThunk('/basket/delete', async (id) => {
    await axios.delete(`http://localhost:7000/basket/${id}`)
    return id
})

const basketSlice = createSlice({
    name: "basket",
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder

        .addCase(getBasketThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getBasketThunk.fulfilled, (state, action) => {
            state.loading = false
            state.cards = action.payload
        })
        .addCase(getBasketThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })


        .addCase(postBasketThunk.fulfilled, (state, action) => {
            state.loading = false
            state.basket.push(action.payload)
        })


        .addCase(deleteBasketThunk.fulfilled, (state, action) => {
            state.loading = false
            state.basket = state.basket.filter(item => item._id !== action.payload)
        })
    }
})

export default basketSlice.reducer