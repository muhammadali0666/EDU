import React, { useEffect, useRef, useState } from "react";
import { filterBalance } from "./constants";
import {HiSelector} from "react-icons/hi";
import {BiCheckboxChecked} from "react-icons/bi";
import { FromToInputStyled } from "./index.style";
import { SearchParams } from "utils/searchparams";
import { useOutsideHandler } from "hooks";
import PriceConvert from "utils/priceConvert";

const NumberFromToInput = ({
  label,
  style,
  className,
  fromInputName = "fromInput",
  toInputName = "toInput",
  fromInputPlaceholder = "From",
  toInputPlaceholder = "To",
  setFilter,
}) => {
  const [,getParams] = SearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const outsideOfSelectRef = useRef();
  const [balanceFrom, setBalanceFrom] = useState("");
  const [balanceTo, setBalanceTo] = useState("");
  const [balanceFromDefault, setBalanceFromDefault] = useState("");
  const [balanceToDefault, setBalanceToDefault] = useState("");
  const [hasGenerate] = PriceConvert();
  const [selectedOption, setSelectedOption] = useState(undefined);

  useOutsideHandler(outsideOfSelectRef, setIsOpen);

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    if (e.target.name === fromInputName) {
      setBalanceFrom(e.target.value);
    } else if (e.target.name === toInputName) {
      setBalanceTo(e.target.value);
    }
  };
  const validation = (str) => {
    if (str) return str;
    return "";
  };

  useEffect(() => {
    let fromInputDefaultValue =
      getParams()[fromInputName]?.toString().length > 0
        ? getParams()[fromInputName]
        : undefined;
    let toInputDefaultValue =
      getParams()[toInputName]?.toString().length > 0
        ? getParams()[toInputName]
        : undefined;
    setBalanceFrom(fromInputDefaultValue);
    setBalanceFromDefault(fromInputDefaultValue);
    setBalanceTo(toInputDefaultValue);
    setBalanceToDefault(toInputDefaultValue);
    setSelectedOption(() => {
      return filterBalance.find(
        (balance) =>
          balance?.balanceFrom === fromInputDefaultValue &&
          balance?.balanceTo === toInputDefaultValue
      );
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setFilter({
      sortBy: "balance",
      sortOrder: 1,
      [fromInputName]:
        e.target[0].value && +e.target[0].value.replaceAll(" ", ""),
      [toInputName]:
        e.target[1].value && +e.target[1].value.replaceAll(" ", ""),
    });
    setBalanceFrom(validation(e.target[0].value));
    setBalanceTo(validation(e.target[1].value));
    setBalanceFromDefault(validation(e.target[0].value));
    setBalanceToDefault(validation(e.target[1].value));
    setIsOpen(false);
  };

  const handleChange = (balance) => {
    setBalanceFrom(balance?.balanceFrom);
    setBalanceTo(balance?.balanceTo);
    setBalanceFromDefault(balance?.balanceFrom);
    setBalanceToDefault(balance?.balanceTo);
    setSelectedOption(balance);
    setFilter({
      sortBy: "balance",
      sortOrder: 1,
      [fromInputName]: balance?.balanceFrom,
      [toInputName]:
        balance?.name === "DEBTOR" ? -balance?.balanceTo : balance?.balanceTo,
    });

    setIsOpen(false);
  };

  return (
    <FromToInputStyled style={style} className={`${className}`}>
      {/* {label && <div className={"select-label"}>{label}</div>} */}
      <div className={`main`}>
        <div ref={outsideOfSelectRef} className={"drop-down-container"}>
          <div
            className={"drop-down-header d-flex align-items-center"}
            onClick={toggling}
          >
            <div className="d-flex align-items-center justify-content-between">
              {balanceToDefault?.toString().length > 0 ||
              balanceFromDefault?.toString().length > 0 ? (
                <>
                  <div className="d-flex align-items-center justify-content-center">
                    <span>{hasGenerate(balanceFromDefault)}</span>
                    {hasGenerate(balanceToDefault) !== "-1" && (
                      <span className="mx-2">-</span>
                    )}
                    <span>{hasGenerate(balanceToDefault)}</span>
                  </div>
                  <div
                    className="ms-2 delete-filter"
                    onClick={async (e) => {
                      e.stopPropagation();
                      await setFilter((prev) => {
                        return {
                          ...prev,
                          [fromInputName]: null,
                          [toInputName]: null,
                        };
                      });
                      setBalanceToDefault("");
                      setBalanceFromDefault("");
                      setBalanceTo("");
                      setBalanceFrom("");
                      setSelectedOption("");
                    }}
                  >
                    &#10005;
                  </div>
                </>
              ) : (
                <>{label}</>
              )}
            </div>
            <HiSelector width={10} height={10} />
          </div>
          {isOpen && (
            <div className={"drop-down-list-container-x"}>
              <form
                style={{ textAlign: "center" }}
                onSubmit={onSubmit}
                className="d-flex justify-content-center align-items-center fromToForm"
              >
                <input
                  onChange={handleInputChange}
                  className={"search-option"}
                  type="text"
                  name={fromInputName}
                  placeholder={fromInputPlaceholder}
                  value={hasGenerate(balanceFrom)}
                />
                <span>-</span>
                <input
                  onChange={handleInputChange}
                  className={"search-option"}
                  type="text"
                  name={toInputName}
                  placeholder={toInputPlaceholder}
                  value={hasGenerate(balanceTo)}
                />
                <button type="submit" className="d-none"></button>
              </form>
              <div className={"drop-down-list"}>
                {filterBalance.map((balance, index) => {
                  return (
                    <div
                      className="list-wrapper"
                      key={balance.name}
                      onClick={() => handleChange(balance)}
                    >
                      <option
                        className={`list-item ${
                          selectedOption?.name === balance.name ? "active" : ""
                        }`}
                        value={"true"}
                      >
                        Name
                        {/* {item[field] + " " + (item.lastName ? item.lastName : "")} */}
                      </option>
                      {selectedOption?.name === balance.name ? (
                        <BiCheckboxChecked className="checkedIcon" />
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </FromToInputStyled>
  );
};

export default NumberFromToInput;
