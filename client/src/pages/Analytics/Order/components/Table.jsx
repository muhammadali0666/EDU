import React from "react";
import { TableStyle } from "../index.style";

const Table = () => (
  <TableStyle
    className="position-relative"
    style={{ height: "auto" }}
  >
    <table className="table">
      <thead>
        <tr>
          <th>№</th>
          <th>Hisobot turlari</th>
          <th>Soni</th>
          <th>Kurslar soni</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <th>Barcha buyurtmalar soni</th>
          <th>9</th>
          <th>11</th>
        </tr>
        <tr>
          <th>2</th>
          <th>Buyurtmadan ketganlar</th>
          <th>0</th>
          <th>0</th>
        </tr>
        <tr>
          <th>3</th>
          <th>Sinov darsiga yozilganlar</th>
          <th>13</th>
          <th>14</th>
        </tr>
        <tr>
          <th>4</th>
          <th>Sinov darsiga kelmay ketganlar</th>
          <th>1</th>
          <th>1</th>
        </tr>
        <tr>
          <th>5</th>
          <th>Sinov darsiga kelganlar</th>
          <th>17</th>
          <th>17</th>
        </tr>
        <tr>
          <th>6</th>
          <th>Sinov darsiga kelib ketganlar</th>
          <th>0</th>
          <th>0</th>
        </tr>
        <tr>
          <th>7</th>
          <th>Birinchi to‘lovni qilganlar</th>
          <th>4</th>
          <th>8</th>
        </tr>
        <tr>
          <th>8</th>
          <th>Birinchi to‘lovni qilib ketganlar</th>
          <th>0</th>
          <th>0</th>
        </tr>
        <tr>
          <th>9</th>
          <th>Tugatganlar</th>
          <th>0</th>
          <th>0</th>
        </tr>
      </tbody>
    </table>
  </TableStyle>
);

export default Table;
