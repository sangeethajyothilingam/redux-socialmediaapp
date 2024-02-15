import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'sangee' },
    { id: '1', name: 'sam' },
    { id: '2', name: 'Dave' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer
