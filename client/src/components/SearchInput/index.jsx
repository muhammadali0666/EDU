/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";
import { debounce } from "utils/debounce";
import { StyledSearchInput } from "./index.style";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({
  type = "text",
  id,
  className,
  label,
  value,
  onChange = Function.prototype,
  name,
  placeholder = "Search",
  setFilter,
}) => {
  const [query] = useState(value);

  const changeHandler = (event) => {
    const { value, name } = event.target;
    setFilter((prev) => ({ ...prev, [name]: value?.toString()?.trim() }));
  };
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), []);
  return (
    <StyledSearchInput className={`custom-input-group ${className}`}>
      {label && <div className={"input-label"}>{label}</div>}
      <FiSearch className="searchIcon" />
      <input
        placeholder={placeholder}
        defaultValue={query}
        type={type}
        id={id}
        name={name}
        className={`custom-input-all`}
        onChange={debouncedChangeHandler}
        autoComplete="off"
      />
    </StyledSearchInput>
  );
};

export default SearchInput;
