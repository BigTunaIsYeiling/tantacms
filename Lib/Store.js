import { configureStore } from "@reduxjs/toolkit";
import { Navsl } from "./NavSlice";
import { CoursesReducer } from "./FiltersSlices/CoursesSlice";
import { StudentsReducer } from "./FiltersSlices/StudentsSlice";
import { graduatesReducer } from "./FiltersSlices/GraduatesSlice";
const Store = configureStore({
  reducer: {
    Navsl,
    CoursesReducer,
    StudentsReducer,
    graduatesReducer,
  },
});
export default Store;
