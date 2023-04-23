/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { debounce } from "utils/debounce";
// import { useHistory } from "react-router";
import { NewSelectStyled } from "./index.style";
import {TiInputChecked} from "react-icons/ti";
import {HiSelector} from "react-icons/hi";
import { SearchParams } from "utils/searchparams";
import { useOutsideHandler } from "hooks";

const SearchableSelect = ({
  searchable = false,
  label,
  children,
  className,
  style = null,
  value,
  disabled = false,
  optional,
  setFilter,
  staticOptions = [],
  onChange = null,
  defaultOptions = null,
  isClearable = true,
  // method = "get",
}) => {
  const [, getParams] = SearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [optionsSelect, setOptionsSelect] = useState(demoOptions);
  const outsideOfSelectRef = useRef();
  // const history = useHistory();

  const toggling = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };
  useOutsideHandler(outsideOfSelectRef, setIsOpen);

  const handleChange = (item) => {
    setSelectedOption(item);
    setIsOpen(false);
    setFilter((prev) => {
      return {
        ...prev,
        name: item.name,
        _id: item._id,
      };
    });
    if (onChange) {
      onChange(item);
    }
  };

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        onClick: () => handleChange(child.props.value),
        className: `list-item ${
          child.props.value === selectedOption?.value ? "active" : ""
        }`,
      });
    });
  };

  useEffect(() => {
    const childArray = React.Children.toArray(children);
    for (const child of childArray) {
      if ("props" in child && child.props.value === value) {
        return setSelectedOption({
          value: child.props.value,
          name: child.props.children,
        });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleSearch = async e => {
    if (e?.target?.value) {
      setOptionsSelect(prev => prev.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
    } else {
      setOptionsSelect(demoOptions)
    }
  };

  const debounceSearch = useCallback(debounce(handleSearch, 300), []);

  useEffect(() => {
    handleSearch(null);
    defaultOptionsFunction();
    getSelectOptions();

    return () => setOptionsSelect(demoOptions)
  }, []);

  const defaultOptionsFunction = () => {
    if (getParams().name && getParams()._id) {
      setSelectedOption({
        _id: getParams()._id,
        name: getParams().name,
      });
    } else if (defaultOptions) {
      setSelectedOption(defaultOptions);
      setFilter((prev) => {
        return {
          ...prev,
          _id: defaultOptions._id,
          name: defaultOptions.name,
        };
      });
    }
  };

  const getSelectOptions = async () => {
    if (!searchable) {
      if (!staticOptions.length) {
        console.log("Searched")
      } else {
        setOptionsSelect(staticOptions);
      }
    }
  };

  const clearIconClick = async (event) => {
    event?.stopPropagation();
    setFilter((prev) => {
      return {
        ...prev,
        name: null,
        _id: null,
      };
    });
    setSelectedOption(null);
  };

  return (
    <NewSelectStyled style={style} className={`${className}`}>
      {/* {label && <div className={"select-label"}>{label}</div>} */}
      <div className={`main`}>
        <div ref={outsideOfSelectRef} className={"drop-down-container"}>
          <div
            className={
              "drop-down-header d-flex align-items-center justify-content-between"
            }
            onClick={toggling}
          >
            {(
              <div className="d-flex align-items-center justify-content-between w-100">
                {console.log(selectedOption, "selectedOption")}
                {selectedOption ? (
                  <>
                    <p className="mb-0 list-name">
                      {selectedOption.name}
                    </p>
                    {isClearable && (
                      <div
                        className="ms-2 delete-filter"
                        onClick={clearIconClick}
                      >
                        &#10005;
                      </div>
                    )}
                  </>
                ) : (
                  <>{label}</>
                )}
              </div>
            ) || label}

            <HiSelector />
          </div>
          {isOpen && (
            <div className={"drop-down-list-container"}>
              {searchable && (
                <div className="search-input-content">
                  <input
                    onChange={debounceSearch}
                    className={"search-option"}
                    type="text"
                    placeholder="Search"
                  />
                </div>
              )}

              <div className={"drop-down-list"}>
                {optionsSelect?.map((item) => {
                  return (
                    <div
                      key={item._id}
                      onClick={() => handleChange(item)}
                      className="list-wrapper"
                    >
                      <div
                        className={`list-item ${
                          selectedOption?._id === item._id ? "active" : ""
                        }`}
                      >
                        {item.name}
                      </div>
                      {selectedOption?._id === item._id ? (
                        <TiInputChecked className="checkedIcon" />
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
                {renderChildren()}
              </div>
            </div>
          )}
        </div>
      </div>
    </NewSelectStyled>
  );
};

export default SearchableSelect;

const demoOptions = [
  {
    _id: 1,
    name: "Math"
  },
  {
    _id: 2,
    name: "Pythics"
  },
  {
    _id: 3,
    name: "Technology"
  },
  {
    _id: 4,
    name: "Tech"
  },
  
]
