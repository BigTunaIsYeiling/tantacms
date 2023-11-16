"use client";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { FilterMonths, Filters } from "@/Lib/FiltersSlices/GraduatesSlice";
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

export default function MonthSelections() {
  const dispatch = useDispatch();
  const filter = useSelector(Filters);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    dispatch(FilterMonths(value));
  };
  const options = [
    {
      name: "January",
      value: "1",
    },
    {
      name: "June",
      value: "2",
    },
    {
      name: "Summer Course",
      value: "3",
    },
  ];
  return (
    <FormControl sx={{ m: 1, width: 200 }}>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        displayEmpty
        multiple
        value={filter.month}
        onChange={handleChange}
        input={<OutlinedInput sx={{ maxHeight: "40px" }} placeholder="All" />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <p>All</p>;
          }
          // render the name not value
          return selected.map((value) => options[value - 1].name).join(", ");
        }}
        MenuProps={MenuProps}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Checkbox checked={filter.month.indexOf(option.value) > -1} />
            <ListItemText primary={option.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
