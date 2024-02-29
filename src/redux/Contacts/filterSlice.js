import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: '' };

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer
