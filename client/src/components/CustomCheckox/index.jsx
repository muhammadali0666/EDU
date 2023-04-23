import React from "react";
import { CheckboxStyled } from "./index.style";

const CustomCheckox = ({ params, label, id, className }) => {
  return (
    <CheckboxStyled className={className}>
      <input
        type="checkbox"
        className="inp-cbx"
        style={{ display: "none" }}
        id={id}
        {...params}
      />
      <label htmlFor={id} className="cbx">
        <span>
          <svg width="12px" height="10px" viewBox=" 0 0 12 10">
            <polygon points="1 5.5 4.8 9 11.21 0.85" />
          </svg>
        </span>
        <span>{label}</span>
      </label>
    </CheckboxStyled>
  );
};

export default CustomCheckox;
