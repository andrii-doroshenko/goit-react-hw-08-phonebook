import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    addFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addFilter } = filterSlice.actions;

//Selectors
export const getFilterValue = state => state.filter.value;
