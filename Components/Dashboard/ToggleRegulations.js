"use client";
import React from "react";
import { Select } from "antd";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const ToggleRegulation = ({ data }) => {
  const router = useRouter();
  const onChange = (value) => {
    Cookies.set("regulation", value);
    router.refresh();
  };
  const options = data.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  return (
    <Select
      status="warning"
      placeholder="Select a Regulation"
      onChange={onChange}
      options={options}
    />
  );
};
export default ToggleRegulation;
