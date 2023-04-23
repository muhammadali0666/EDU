import React from "react";
import { TableStyle } from "../index.style";

const Table = ({ finance }) => {
  return (
    <div style={{ height: "95%" }}>
      <TableStyle>
        <table className="table">
          <thead>
            <tr>
              <th>№</th>
              <th>Turlari</th>
              <th className="text-end">Summa</th>
            </tr>
          </thead>
          <tbody>
            {finance?.data?.map((item, index) => (
              <tr key={index}>
                <th>
                  <span style={{ color: item.color }}>{index + 1}</span>
                </th>
                <th>
                  <span style={{ color: item.color }}>{item.name}</span>
                </th>
                <th className="text-end">
                  <span style={{ color: item.color }}>
                    {item.amount} uzs
                  </span>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {!finance?.data?.length && (
          <span className="not_found_text">Data not found</span>
        )}
      </TableStyle>
      <div
        className="d-flex align-items-center justify-content-between p-2"
        style={{
          borderRadius: "0 0 12px 12px",
          boxShadow: "rgb(128 116 116 / 5%) 56px -5px 10px -1px",
          marginTop: "1px",
          background: `#ccc`,
        }}
      >
        <span>Total</span>
        <span>500UZS</span>
      </div>
    </div>
  );
};

export default Table;
