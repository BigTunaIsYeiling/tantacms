import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Filters: {
    division: [],
    name: "",
    limit: "",
    year: "",
    month: [],
  },
  sort: "id",
  order: "asc",
};
const GraduatesSlices = createSlice({
  name: "Graduates",
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
    SetLimit: (state, action) => {
      state.Filters.limit = action.payload;
    },
    ResetFiltersgrad: (state) => {
      state.Filters = initialState.Filters;
      state.sort = initialState.sort;
      state.order = initialState.order;
    },
    SetYear: (state, action) => {
      state.Filters.year = action.payload;
    },
    FilterMonths: (state, action) => {
      state.Filters.month = action.payload;
    },
  },
});
export const graduatesReducer = GraduatesSlices.reducer;
export const {
  SetSort,
  SetOrder,
  FilterName,
  FilterDivision,
  SetLimit,
  ResetFiltersgrad,
  SetYear,
  FilterMonths,
} = GraduatesSlices.actions;
export const sort = (state) => state.graduatesReducer.sort;
export const order = (state) => state.graduatesReducer.order;
export const Filters = (state) => state.graduatesReducer.Filters;
