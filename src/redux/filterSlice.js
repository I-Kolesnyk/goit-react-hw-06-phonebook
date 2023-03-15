import { createSlice } from '@reduxjs/toolkit';

const initialState = {value: ''};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, actions) {
        state.value = actions.payload;
        
    },
  },
});



export const {setFilter} = filterSlice.actions;

export const getFilterValue = state => state.filter.value;