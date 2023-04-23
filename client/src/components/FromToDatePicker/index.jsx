import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import React, { useRef, useState } from 'react'
import {
  CustomHeaderStyled,
  FromToDatePickerStyled,
} from "./index.style";
import {
  DATE_PICKER_ADDITIONS_DATES,
  // today,
} from "./constants";
import { useOutsideHandler } from "hooks";
import { SearchParams } from "utils/searchparams";
import { useEffect } from "react";
import { BsCalendar3 } from "react-icons/bs";

export default function FromToDatePicker({
  setFilter,
  fromDateField = "fromDate",
  toDateField = "toDate",
  isClearable = true,
  defaultDates,
}) {
  const [, getParams] = SearchParams();
  const [startDate, setStatrDate] = useState();
  const [endDate, setEndDate] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const outsideOfSelectRef = useRef();
  useOutsideHandler(outsideOfSelectRef, setIsOpen);
  const inputRef = useRef();

  useEffect(() => {
    if (getParams()[fromDateField] && getParams()[toDateField]) {
      let dateFrom = new Date(getParams()[fromDateField]);
      let dateTo = new Date(getParams()[toDateField]);
      setEndDate(dateTo);
      setStatrDate(dateFrom);
    } else if (defaultDates) {
      const [start, end] = defaultDates;
      setStatrDate(start);
      setEndDate(end);
      const dateStart = new Date(start);
      const dateEnd = new Date(end);
      setFilter((prev) => {
        return {
          ...prev,
          [fromDateField]: dateStart.toISOString(),
          [toDateField]: dateEnd.toISOString(),
        };
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStatrDate(start);
    setEndDate(end);

    if (start && end) {
      let sec = end.valueOf() + (1000 * 60 * 60 * 24 - 1);
      let time = new Date(sec);

      const dateStart = new Date(start.toString());
      const dateEnd = new Date(time.toISOString());

      // vaqtni local vaqtga ozgartirish
      dateStart.toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" });
      dateEnd.toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" });

      setFilter((prev) => {
        return {
          ...prev,
          [fromDateField]: dateStart.toISOString(),
          [toDateField]: dateEnd.toISOString(),
        };
      });
      setIsOpen(false);
    }
    if (!start && !end) {
      setFilter((prev) => {
        return {
          ...prev,
          [fromDateField]: null,
          [toDateField]: null,
        };
      });
    }
  };

  const createAdditionalMenu = () => {
    const popper = document.querySelector(".react-datepicker-popper");

    const additoonalMenu = document.createElement("div");
    additoonalMenu.innerText = "";
    popper?.appendChild(additoonalMenu);
  };

  const additionalMenuItemClick = (newDates) => {
    onChange(newDates);
  };

  const renderCustomHeader = () => (
    <CustomHeaderStyled>
      <ul className="list-unstyled m-0 p-0">
        {DATE_PICKER_ADDITIONS_DATES.map((date, i) => (
          <li
            onClick={() => {
              additionalMenuItemClick([date.startDate, date.endDate]);
              setIsMenuOpen(false);
            }}
            key={i}
            className="filtered-date-item"
          >
            {date.title}
          </li>
        ))}
      </ul>
    </CustomHeaderStyled>
  );

  return (
    <FromToDatePickerStyled className="ms-2">
      <div
        className="date-picer-custom d-flex justify-content-center align-items-center
        range-datepiker"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="calenderIcon"
          onClick={() => {
            setIsOpen(true);
            setIsMenuOpen(true);
            inputRef.current.input.focus();
          }}
        >
          <BsCalendar3 />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="date-picer-start" ref={outsideOfSelectRef}>
            <DatePicker
              dateFormat="dd/MM/yy"
              startDate={startDate}
              endDate={endDate}
              selected={startDate}
              placeholderText="Choose Date"
              isClearable={isClearable}
              selectsRange={true}
              onChange={onChange}
              open={isOpen}
              ref={inputRef}
              showPopperArrow={false}
              onCalendarClose={() => {
                setIsOpen(false)
                setIsMenuOpen(false)
              }}
              // renderCustomHeader={renderCustomHeader}
              onCalendarOpen={() => {
                setIsOpen(true);
                setIsMenuOpen(true);
                createAdditionalMenu();
              }}
              onKeyDown={(e) => {
                e.preventDefault();
              }}
            />
            {isMenuOpen && renderCustomHeader()}
          </div>
        </div>
      </div>
    </FromToDatePickerStyled>
  );
}
