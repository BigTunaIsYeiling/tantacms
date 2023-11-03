import { configureStore } from "@reduxjs/toolkit";
import { Navsl } from "./NavSlice";
import { CoursesReducer } from "./FiltersSlices/CoursesSlice";
import { StudentsReducer } from "./FiltersSlices/StudentsSlice";
const Store = configureStore({
  reducer: {
    Navsl,
    CoursesReducer,
    StudentsReducer
  },
});
export default Store;
