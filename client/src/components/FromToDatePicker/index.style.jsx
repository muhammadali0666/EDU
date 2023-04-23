import styled from "styled-components";

export const FromToDatePickerStyled = styled.div`
  .date-picer-custom .react-datepicker-popper {
    z-index: 100001;
  }
  .date-picer-custom {
    overflow: hidden;
    border-radius: 6px;
    height: 44px;
    border: 1px solid #eee4e4;
  }
  .react-datepicker__input-container input:hover {
    cursor: pointer;
  }
  .react-datepicker__input-container input {
    letter-spacing: -0.02em;
    outline: none;
    border: none;
    transition: all 0.4ms linear !important;
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    padding: 8px 15px;
    font-weight: 500;
    font-size: 1rem;
    color: #333 !important;
    line-height: 1.5;
    background-color: #fff;
    transition: color 0.2s ease;
    &::placeholder {
      font-weight: 400;
      color: #333 !important;
    }
  }
  .date-picer-custom .react-datepicker__close-icon::after {
    padding: 0;
    color: #333;
    font-size: 20px;
  }
  .react-datepicker {
    border-radius: 12px;
    border: none;
    outline: none;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 18%);
  }
  .react-datepicker__triangle::before {
    border-bottom-color: blue !important;
    top: 0 !important;
  }
  .react-datepicker__triangle::after {
    border-bottom-color: blue !important;
  }
  .react-datepicker__month-container .react-datepicker__header {
    background: blue;
    border-bottom-color: #eee4e4;
    padding: 15px;
  }
  .react-datepicker__current-month {
    color: #fff;
    padding: 3px 0;
  }
  .react-datepicker__day-names .react-datepicker__day-name {
    color: #fff !important;
  }
  .react-datepicker__navigation.react-datepicker__navigation--previous
    span::before,
  .react-datepicker__navigation.react-datepicker__navigation--next
    span::before {
    border-color: #fff;
    top: 20px;
  }
  .range-datepiker
    .react-datepicker__month
    .react-datepicker__week
    .react-datepicker__day {
    border-radius: 50%;
    transition: all 0.3s linear !important;
    outline: none !important;
    border: none !important;
    color: #666;
  }
  .range-datepiker
    .react-datepicker__month
    .react-datepicker__week
    .react-datepicker__day:hover {
    color: #fff;
    background: blue;
  }
  .range-datepiker
    .react-datepicker__day.react-datepicker__day--keyboard-selected.react-datepicker__day--today {
    color: #fff !important;
    background: blue !important;
  }
  .range-datepiker .react-datepicker__day.react-datepicker__day--selected {
    color: #666 !important;
    background: transparent !important;
  }
  .range-datepiker .react-datepicker__day.react-datepicker__day--in-range {
    color: #fff !important;
    background: blue !important;
    opacity: 1 !important;
  }
  .range-datepiker
    .react-datepicker__day.react-datepicker__day--in-selecting-range {
    color: #fff !important;
    background: blue !important;
    opacity: 0.6 !important;
  }
  .range-datepiker
    .react-datepicker__day.react-datepicker__day--keyboard-selected {
    color: #666 !important;
    background: transparent !important;
  }
  .range-datepiker
    .react-datepicker__day.react-datepicker__day--keyboard-selected.react-datepicker__day--in-range {
    color: #fff !important;
    background: blue !important;
  }
  .range-datepiker
    .react-datepicker__day.react-datepicker__day--keyboard-selected.react-datepicker__day--in-selecting-range {
    color: #fff !important;
    background: blue !important;
    opacity: 0.6 !important;
  }
  .range-datepiker .react-datepicker__day--outside-month,
  .react-datepicker__day--in-selecting-range.react-datepicker__day--outside-month,
  .react-datepicker__day--outside-month.react-datepicker__day--in-range {
    color: transparent !important;
    pointer-events: none !important;
    background: transparent !important;
  }

  .react-datepicker__input-container input {
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .calenderIcon {
    background-color: #fff;
    padding: 10px 15px;
    padding-right: 1px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    height: 44px;
    display: flex;
    align-items: center;
  }
  .calenderIcon:hover {
    cursor: pointer;
  }

  .react-datepicker__month-container {
    width: auto !important;
    border-radius: 12px;
  }

  .react-datepicker__close-icon::after {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    background-color: transparent !important;
    cursor: pointer;
  }

  .react-datepicker__close-icon:hover::after {
    transition: all 0.3s ease-in-out;
  }
`;

export const CustomHeaderStyled = styled("div")`
  position: absolute;
  transform: translate(257px, 9px);
  padding: 7px;
  border-radius: 3px;
  background-color: #fff;
  min-width: 150px;
  z-index: 1000000;
  ul {
    li {
      font-size: 15px;
      padding: 5px;
      border-radius: 8px;
      cursor: pointer;
      background-color: #ccc;
      margin-bottom: 7px;
    }
  }
`;
