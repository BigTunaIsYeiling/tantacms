import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Filters: {
    division: [],
    name: "",
    level: "",
    limit: "",
  },
  sort: "id",
  order: "asc",
};
const StudentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    FilterDivision: (state, action) => {
      state.Filters.division = action.payload;
    },
    SetSort: (state, action) => {
      state.sort = action.payload;
    },
    SetOrder: (state, action) => {
      state.order = action.payload;
    },
    FilterName: (state, action) => {
      state.Filters.name = action.payload;
    },
    Filterlevel: (state, action) => {
      state.Filters.level = action.payload;
    },
    SetLimit: (state, action) => {
      state.Filters.limit = action.payload;
    },
  },
});
export const StudentsReducer = StudentsSlice.reducer;
export const {
  SetSort,
  SetOrder,
  FilterName,
  Filterlevel,
  FilterDivision,
  SetLimit,
} = StudentsSlice.actions;
export const sort = (state) => state.StudentsReducer.sort;
export const order = (state) => state.StudentsReducer.order;
export const Filters = (state) => state.StudentsReducer.Filters;
