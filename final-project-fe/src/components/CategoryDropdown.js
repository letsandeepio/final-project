import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


export default function(props) {
  return (
    <div>
      <FormControl>
        <Select>
          <MenuItem value="eat">What should I eat?</MenuItem>
          <MenuItem value="do">What should I do?</MenuItem>
          <MenuItem value="cook">What should I cook?</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}