import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { gql, useMutation } from '@apollo/client';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}));

const ADDACTIVITY_MUTATION = gql`
  mutation AddActivityMutation(
    $title: String!
    $category: String!
    $duration: Int!
    $image_url: String
  ) {
    addActivity(
      title: $title
      category: $category
      duration: $duration
      image_url: $image_url
    ) {
      id
    }
  }
`;

export default function AddActivityForm(props) {
  let history = useHistory();
  const classes = useStyles();
  const { showSnackBar } = props;
  const menuItems = ['watch', 'eat out', 'cook', 'other'].map((category) => (
    <MenuItem value={category}>{category}</MenuItem>
  ));

  const [category, setCategory] = useState('watch');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState(null);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const [addActivity] = useMutation(ADDACTIVITY_MUTATION, {
    onCompleted(response) {
      const { error } = response;
      if (error) {
        showSnackBar({ message: error, severity: 'error' });
      } else {
        showSnackBar({
          message: 'Successfully added activity!',
          severity: 'success'
        });
      }
    },
    onError(e) {
      showSnackBar({ message: 'Something went wrong.', severity: 'error' });
    }
  });

  function addActivityHelper() {
    if (!title) {
      showSnackBar({ message: 'Title required.', severity: 'warning' });
      return;
    }

    if (!category) {
      showSnackBar({ message: 'Category required.', severity: 'warning' });
      return;
    }

    if (!hours && !minutes) {
      showSnackBar({
        message: 'Valid duration required.',
        severity: 'warning'
      });
      return;
    }

    addActivity({
      variables: {
        title,
        category: category === 'eat out' ? 'eat' : category,
        duration: Number(hours * 60) + Number(minutes),
        image_url: url
      }
    });

    history.push('/categories');
  }

  return (
    <section>
      <CssBaseline />

      <div>
        <FormControl>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {menuItems}
          </Select>
        </FormControl>
      </div>
      <TextField
        id="standard-search"
        label="Activity Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="search"
      />
      <p>Image URL</p>
      <TextField
        id="add-activity-url"
        label="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <p>Approximate Duration</p>
      <TextField
        id="add-activity-hours"
        label="Hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        type="number"
      />
      <TextField
        id="add-activity-minutes"
        label="Minutes"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        type="number"
      />
      <br></br>
      <Button variant="contained" onClick={addActivityHelper} color="primary">
        Save
      </Button>
    </section>
  );
}
