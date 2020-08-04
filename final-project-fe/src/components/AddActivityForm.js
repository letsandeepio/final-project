import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddActivityForm(props) {
  const classes = useStyles();
  const [question, setQuestion] = useState(props.categories[0].question);
  const menuItems= props.categories.map(obj=> <MenuItem value={obj.question}>{obj.question}</MenuItem>)

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <section>
      <div>
        <FormControl>
          <Select value={question}
            onChange={props.onChange}>
            {menuItems}
          </Select>
        </FormControl>
      </div>
      <TextField id="standard-search" label="Activity Name" type="search" />
      <p>Approximate Duration</p>
      <TextField id="add-activity-hours" label="Hours" type="number" />
      <TextField id="add-activity-minutes" label="Minutes" type="number" />
      <br></br>
      <Button variant="contained" onClick={props.onClick} color="primary">
        Save
      </Button>
    </section>
  )
}