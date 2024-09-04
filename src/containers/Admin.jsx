import React, { useState } from "react";
import Navbar from "../components/admin/Navbar";
import Main from "../components/admin/Main";

export const Admin = () => {
  const [option, setOption] = useState("products");

  const handleOptionChange = (newOption) => {
    setOption(newOption);
  };

  return (
    <div>
      <Navbar option={option} onOptionChange={handleOptionChange} />
      <Main option={option} />
    </div>
  );
};
