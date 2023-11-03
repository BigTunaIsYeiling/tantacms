"use client";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { FilterDivision, Filters } from "@/Lib/FiltersSlices/StudentsSlice";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

export default function Scelection({ data }) {
  const dispatch = useDispatch();
  const filter = useSelector(Filters);
  const names = data.map((stud) =>
    stud.division ? stud.division.name : stud.group.name
  );
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    dispatch(FilterDivision(value));
  };
  return (
    <FormControl sx={{ m: 1, width: 200 }}>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        displayEmpty
        multiple
        value={filter.division}
        onChange={handleChange}
        input={<OutlinedInput sx={{ maxHeight: "40px" }} placeholder="All" />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <p>All</p>;
          }

          return selected.join(", ");
        }}
        MenuProps={MenuProps}
      >
        {[...new Set(names)]
          .filter((nam) => nam !== undefined)
          .map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={filter.division.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
