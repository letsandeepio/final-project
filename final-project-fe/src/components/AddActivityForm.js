import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { gql, useMutation } from '@apollo/client';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const ADDACTIVITY_MUTATION = gql`
mutation AddActivityMutation($title: String!, $category: String!, $duration: Int!) {
  addActivity(
    title: $title
    category: $category
    duration: $duration){
    	id
  }
}
`;

export default function AddActivityForm(props) {
  const classes = useStyles();
  const menuItems= props.categories.map(obj=> <MenuItem value={obj.question}>{obj.question}</MenuItem>)

  const [category, setCategory] = useState(props.category || "");
  const [title, setTitle] = useState(props.title || "");
  const [hours, setHours] = useState(props.hours || 0);
  const [minutes, setMinutes] = useState(props.minutes || 0);

  const [addActivity, { data }] = useMutation(ADDACTIVITY_MUTATION, {
    onCompleted(response) {
      console.log("activity added!", addActivity)
    }
  })

  function addActivityHelper() {
    addActivity({
      variables: {
        title,
        category,
        duration: (hours * 60) + minutes
      }
    })
  }

  return (
    <section>
      <div>
        <FormControl>
          <Select
            value={category}
            onChange={e => setCategory(e.target.value)}>
            {menuItems}
          </Select>
        </FormControl>
      </div>
      <TextField
        id="standard-search"
        label="Activity Name"
        value={title}
        onChange={e => setTitle(e.target.value)}
        type="search"
      />
      <p>Approximate Duration</p>
      <TextField
        id="add-activity-hours"
        label="Hours"
        value={hours}
        onChange={e => setHours(e.target.value)}
        type="number"
      />
      <TextField
        id="add-activity-minutes"
        label="Minutes"
        value={minutes}
        onChange={e => setMinutes(e.target.value)}
        type="number"
      />
      <br></br>
      <Button variant="contained" onClick={addActivityHelper} color="primary">
        Save
      </Button>
    </section>
  )
}