import React from "react";

import "./search-box.style.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
        // {(e) => this.setState({ searchField: e.target.value }), () => {console.log(this.state); //Here we used a callback function because setState is asyncronous and body will be rendered before the input it padssed})}
    />
  );
};
