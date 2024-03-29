"use client";
import {
  Box,
  Drawer,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { TbFilterX } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  SetSort,
  sort,
  order,
  SetOrder,
  Filters,
  FilterName,
  FilterCode,
  Filtersemester,
  Filterlevel,
} from "@/Lib/FiltersSlices/CoursesSlice";
import Scelection from "./CoursesSelection";
import ExportData from "./CoursesExportData";
const CoursesFilters = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const SortType = useSelector(sort);
  const OrderType = useSelector(order);
  const dispatch = useDispatch();
  const filtersOption = useSelector(Filters);
  return (
    <Box>
      <Tooltip title="filter" arrow>
        <IconButton onClick={handleClick}>
          <TbFilterX color="black" />
        </IconButton>
      </Tooltip>
      <Drawer open={open} onClose={handleClose} anchor="right">
        <Stack
          direction={"column"}
          spacing="4rem"
          sx={{ padding: "20px" }}
          alignItems={"flex-start"}
        >
          <Stack direction={"column"} spacing="11px">
            <Box fontWeight={700}>Filters</Box>
            <Stack direction={"column"} spacing="10px">
              <Box
                component={"input"}
                autoCorrect={"false"}
                paddingY={"10px"}
                paddingX="8px"
                sx={{
                  outline: "0",
                  border: "0",
                  ":focus": {
                    boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                  },
                  borderRadius: "3px",
                  fontWeight: 400,
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
                placeholder={"name"}
                value={filtersOption.name}
                onChange={(e) => dispatch(FilterName(e.target.value))}
              />
              <Box
                component={"input"}
                autoCorrect={"false"}
                paddingY={"10px"}
                paddingX="8px"
                sx={{
                  outline: "0",
                  border: "0",
                  ":focus": {
                    boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                  },
                  borderRadius: "3px",
                  fontWeight: 400,
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
                placeholder={"code"}
                value={filtersOption.code}
                onChange={(e) => dispatch(FilterCode(e.target.value))}
              />
              <Box
                component={"input"}
                autoCorrect={"false"}
                paddingY={"10px"}
                paddingX="8px"
                sx={{
                  outline: "0",
                  border: "0",
                  ":focus": {
                    boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                  },
                  borderRadius: "3px",
                  fontWeight: 400,
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
                placeholder={"level"}
                value={filtersOption.level}
                onChange={(e) => dispatch(Filterlevel(e.target.value))}
              />
              <Box
                component={"input"}
                autoCorrect={"false"}
                paddingY={"10px"}
                paddingX="8px"
                sx={{
                  outline: "0",
                  border: "0",
                  ":focus": {
                    boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                  },
                  borderRadius: "3px",
                  fontWeight: 400,
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
                placeholder={"semester"}
                value={filtersOption.semester}
                onChange={(e) => dispatch(Filtersemester(e.target.value))}
              />
            </Stack>
          </Stack>
          <Stack direction={"column"} spacing="10px">
            <Box fontWeight={700}>Department</Box>
            <Scelection data={data} />
          </Stack>
          <Stack direction={"column"} spacing="10px">
            <Box fontWeight={700}>Sort</Box>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={SortType}
                value={SortType}
                name="radio-buttons-group"
                onChange={(e) => dispatch(SetSort(e.target.value))}
              >
                <FormControlLabel value="id" control={<Radio />} label="ID" />
                <FormControlLabel
                  value="hours"
                  control={<Radio />}
                  label="Hours"
                />
                <FormControlLabel
                  value="level"
                  control={<Radio />}
                  label="Level"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
          <Stack direction={"column"} spacing="10px">
            <Box fontWeight={700}>Order</Box>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={OrderType}
                name="radio-buttons-group"
                onChange={(e) => dispatch(SetOrder(e.target.value))}
              >
                <FormControlLabel
                  value="asc"
                  control={<Radio />}
                  label="Ascending"
                />
                <FormControlLabel
                  value="dsc"
                  control={<Radio />}
                  label="Descending"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
          <ExportData data={data} />
        </Stack>
      </Drawer>
    </Box>
  );
};
export default CoursesFilters;
