import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Filters: {
    division: [],
    name: "",
    code: "",
    level: "",
    semester: "",
  },
  sort: "id",
  order: "asc",
};
const CoursesSlice = createSlice({
  name: "courses",
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
    FilterCode: (state, action) => {
      state.Filters.code = action.payload;
    },
    Filterlevel: (state, action) => {
      state.Filters.level = action.payload;
    },
    Filtersemester: (state, action) => {
      state.Filters.semester = action.payload;
    },
    ResetFilters: (state) => {
      state.Filters = initialState.Filters;
      state.sort = initialState.sort;
      state.order = initialState.order;
    },
  },
});
export const CoursesReducer = CoursesSlice.reducer;
export const {
  FilterDivision,
  SetSort,
  SetOrder,
  FilterName,
  Filtersemester,
  FilterCode,
  Filterlevel,
  ResetFilters,
} = CoursesSlice.actions;
// export const division = (state) => state.DivisonReducer.Filters.division;
export const sort = (state) => state.CoursesReducer.sort;
export const order = (state) => state.CoursesReducer.order;
export const Filters = (state) => state.CoursesReducer.Filters;
