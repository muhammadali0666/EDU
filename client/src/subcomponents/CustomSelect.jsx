import { FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'

export default function CustomSelect({ options, defaultValue }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        displayEmpty
        defaultValue={defaultValue}
      >
        {options.map((opt, i) => (
          <MenuItem key={i} value={opt.value}>{opt.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
