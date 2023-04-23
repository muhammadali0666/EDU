import React from 'react'
import { BiExport, BiImport } from 'react-icons/bi'
import Button from 'subcomponents/Button'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Checkbox } from '@mui/material';
import { useState } from 'react';
import { PhoneNumber } from './index.style';
import { FromToDatePicker, NumberFromToInput, SearchableSelect, SearchInput } from 'components';

export default function Active() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState([]);
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState(null);
  const [students, setStudents] = useState(data);
  const [, setFilter] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((_, i) => i);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (index) => {
    const selectedIndex = selected.indexOf(index);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, index);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };


  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <div>
      <div className="d-flex justify-content-between gap-5">
        <div className="d-flex gap-3">
          <Button
            Icon={BiImport}
            text="Import"
          />
          <Button
            Icon={BiExport}
            text="Export"
          />
        </div>
        <div className="d-flex flex-wrap align-items-center gap-3 justify-content-end">
          <FromToDatePicker
            className="ms-2"
            field="paymentDate"
            isClearable={false}
            setFilter={setFilter}
          />
          <SearchableSelect
            label="States"
            className="ms-2"
            searchable={true}
            setFilter={setFilter}
            name="courseName"
            id="courseId"
          />
          <NumberFromToInput
            setFilter={setFilter}
            label="Balance"
          />
          <SearchableSelect
            label="Moderator"
            className=" ms-2"
            searchable={true}
            setFilter={setFilter}
            name="courseName"
            id="courseId"
          />
          <SearchableSelect
            label="Teacher"
            className="ms-2"
            searchable={true}
            setFilter={setFilter}
            name="courseName"
            id="courseId"
          />
          <SearchableSelect
            label="By colors"
            className="ms-2"
            setFilter={setFilter}
            name="courseName"
            id="courseId"
          />
          <SearchableSelect
            label="Reason"
            className="ms-2"
            setFilter={setFilter}
            name="courseName"
            id="courseId"
          />
          <SearchInput
            id="search-input"
            name="search-input"
          />
        </div>
      </div>
      <div className='mt-5'>
        <Paper sx={{ width: '100%' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={9}>
                    Details
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      indeterminate={selected.length > 0 && selected.length < data.length}
                      checked={data.length > 0 && selected.length === data.length}
                      onChange={handleSelectAllClick}
                      inputProps={{
                        'aria-label': 'select all desserts',
                      }}
                    />
                  </TableCell>
                  {headers.map((header, i) => (
                    <TableCell
                      key={i}
                      style={{ top: 57, minWidth: `${header.minWidth}px` }}
                    >
                      {header.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {students
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, i) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          onChange={() => handleClick(i)}
                          color="primary"
                          checked={isSelected(i)}
                          inputProps={{
                            'aria-labelledby': `enhanced-table-checkbox-${i}`,
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        {item.num}
                      </TableCell>
                      <TableCell>
                        {item.id}
                      </TableCell>
                      <TableCell>
                        {item.student_name}
                      </TableCell>
                      <PhoneNumber
                        onClick={() => setSelectedPhoneNumber(prev => prev === i ? "" : i)}
                        active={selectedPhoneNumber === i ? "true" : undefined}
                        color={item.phone_number.status}
                      >
                        <span className="number">{item.phone_number.number}</span>
                        <div className='phone_statuses'>
                          {phone_statuses?.map((status, i) => (
                            <button
                              key={i}
                              onClick={() => setStudents(prev => prev.map((item, i) => i === selectedPhoneNumber ? { ...item, phone_number: { number: item.phone_number.number, status: status.color } } : item))}
                            >
                              <div className="status-color" style={{ backgroundColor: status.color }} />
                              <span>{status.label}</span>
                            </button>
                          ))}
                          {item.phone_number.status ? (
                            <button onClick={() => setStudents(prev => prev.map((item, i) => i === selectedPhoneNumber ? { ...item, phone_number: { number: item.phone_number.number, status: "" } } : item))}>Reset</button>
                          ) : null}
                        </div>
                      </PhoneNumber>
                      <TableCell>
                        {item.balance}
                      </TableCell>
                      <TableCell>
                        {item.payment_date}
                      </TableCell>
                      <TableCell>
                        {item.created_date}
                      </TableCell>
                      <TableCell>
                        {item.moderator}
                      </TableCell>
                      <TableCell>
                        {item.download_app_date}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  )
}

const headers = [
  {
    label: "№",
    minWidth: 120
  },
  {
    label: "ID",
    minWidth: 120
  },
  {
    label: "STUDENT NAME",
    minWidth: 300
  },
  {
    label: "PHONE NUMBER",
    minWidth: 250
  },
  {
    label: "BALANCE",
    minWidth: 200
  },
  {
    label: "PAYMENT DATE",
    minWidth: 180
  },
  {
    label: "CREATED DATE",
    minWidth: 180
  },
  {
    label: "MODERATOR",
    minWidth: 300
  },
  {
    label: "DOWNLOAD APP DATE",
    minWidth: 180
  }
]

const createData = (num, id, student_name, phone_number, balance, payment_date, created_date, moderator, download_app_date) => ({
  num, id, student_name, phone_number, balance, payment_date, created_date, moderator, download_app_date
});

const data = [
  createData(1, 381, "Avazbek_Akmalovich Barakayev", { number: "+998994454544", status: "" }, 1000000, "28.07.2022 | 12:00", "17.09.2022 | 01:16", "Avazbek Barakayev", "14.10.2022 | 03:29"),
  createData(1, 381, "Avazbek_Akmalovich Barakayev", { number: "+998994454544", status: "" }, 1000000, "28.07.2022 | 12:00", "17.09.2022 | 01:16", "Avazbek Barakayev", "14.10.2022 | 03:29"),
  createData(1, 381, "Avazbek_Akmalovich Barakayev", { number: "+998994454544", status: "" }, 1000000, "28.07.2022 | 12:00", "17.09.2022 | 01:16", "Avazbek Barakayev", "14.10.2022 | 03:29"),
  createData(1, 381, "Avazbek_Akmalovich Barakayev", { number: "+998994454544", status: "" }, 1000000, "28.07.2022 | 12:00", "17.09.2022 | 01:16", "Avazbek Barakayev", "14.10.2022 | 03:29"),
  createData(1, 381, "Avazbek_Akmalovich Barakayev", { number: "+998994454544", status: "" }, 1000000, "28.07.2022 | 12:00", "17.09.2022 | 01:16", "Avazbek Barakayev", "14.10.2022 | 03:29"),
];


const phone_statuses = [
  {
    label: "Telefon ko'tarmadi",
    color: "#ea7406"
  },
  {
    label: "Telefon ko'tarmadi 2",
    color: "#15a57f"
  },
  {
    label: "Telefon ko'tarmadi 3",
    color: "#9e0000"
  },
  {
    label: "Telefon ko'tarmadi 4",
    color: "#5206ea"
  }
]

