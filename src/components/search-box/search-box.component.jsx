import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      classname='search'
      onChange={handleChange}
      type='search'
      placeholder={placeholder}
    />
  );
};
