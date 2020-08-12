import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import CategoryDropdown from '../components/CategoryDropdown';
import SuggestionCard from '../components/SuggestionCard';
import TimePicker from '../components/TimePicker';
import SuggesterButtonBox from '../components/SuggesterButtonBox';
import sortActivities from '../helpers/sortActivities';
import { useMutation } from '@apollo/client';
import { useBeforeunload } from 'react-beforeunload';


import AddActivityButton from '../components/AddActivityButton';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import pluralize from 'pluralize';

import { Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const ACTIVITY_QUERY = gql`
  query ActivityQuery {
    activities {
      id
      title
      category
      duration
      status
      image_url
    }
  }
`;

const CHANGESTATUS_MUTATION = gql`
  mutation changeStatusMutation($id: Int!, $status: String!) {
    changeStatus(id: $id, status: $status) {
      id
      status
    }
  }
`;

const DELETE_ACTIVITY = gql`
  mutation deleteActivityMutation ($id: Int!) {
    deleteActivity (id: $id) {
      id
    }
  }
`;

export default function SuggesterPage(props) {
  const [timeAvailable, setTimeAvailable] = useState(props.timeAvailable)
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [activitySuggestions, setActivitySuggestions] = useState(null);
  const [category, setCategory] = useState(props.category);
  const [open, setOpen] = useState(false);
  const [sortMethod, setSortMethod] = useState('keith');

  let history = useHistory();
  const classes = useStyles();

  const { loading, data, refetch } = useQuery(ACTIVITY_QUERY);

  const [changeStatus] = useMutation(CHANGESTATUS_MUTATION, {
    onError(error) {
      console.error(error);
    }
  });

  const [deleteActivity] = useMutation(DELETE_ACTIVITY, {
    onError(error) {
      console.error(error);
    },
    onCompleted() {
      refetch();
    }
  })

  function deleteActivityFromDatabase(id) {
    deleteActivity({
      variables: {
        id: Number(id)
      }
    });
  }

  const handleChange = (event) => {
    setSortMethod(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleNow() {
    const id = activitySuggestions.activities[suggestionIndex].id;
    changeStatus({
      variables: {
        id: Number(id),
        status: 'progress'
      }
    });

    history.push('/success');
  }

  function indexIncrementor() {
    console.log('index atttempted increment');
    let i = suggestionIndex;
    if (i >= activitySuggestions.activities.length - 1 || activitySuggestions.activities.length === 1) {
      setSuggestionIndex(0);
    } else {
      setSuggestionIndex(i + 1);
    }
  };

  useEffect(() => {
    if (data) {
      const filteredActivities = sortActivities(
        data.activities,
        category,
        timeAvailable,
        sortMethod,
      );
      setActivitySuggestions(filteredActivities);
      setSuggestionIndex(0);
    }
  }, [data, timeAvailable, category, sortMethod]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeAvailable, category]);

  return (
    <>
      <div className="suggestorPage">
        <div>
          <div style={{ width: '400px', textAlign: 'right', marginTop: '5em' }}>
            <Button onClick={handleClickOpen} style={{
                  fontSize: '1em',
                  justifyContent: 'center',
                  textTransform: 'lowercase',
                  height: '2em',
                  marginTop: '.9em',
                  // paddingLeft: '1em',
                  // marginLeft: '1em',
                  color: '#868686' }}>sort</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
              <DialogTitle>Filters</DialogTitle>
              <DialogContent>
                <form className={classes.container}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="demo-dialog-native">Sort Method</InputLabel>
                    <Select
                      native
                      value={sortMethod}
                      onChange={handleChange}
                      input={<Input id="demo-dialog-native" />}
                    >
                      <option aria-label="None" value="" />
                      <option value='keith'>Keith's Sort</option>
                      <option value='duration'>Duration</option>
                      <option value='random'>Random</option>
                    </Select>
                  </FormControl>
                </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
        <CategoryDropdown
          questions={props.categories}
          question={props.category}
          onChange={(value) => {
            setCategory(value);
            props.onCategoryChange(value);
          }}
        />
        <div style={{ marginTop: '0.5em', marginBottom: '2em' }}>
          <TimePicker
            onChange={setTimeAvailable}
            timeAvailable={timeAvailable}
          />
        </div>
        {loading || activitySuggestions === null ? (
          'loading'
          ) : activitySuggestions.activities.length > 0 ? (
            <>
            <SuggestionCard
              activity={activitySuggestions.activities[suggestionIndex]}
              onDelete={deleteActivityFromDatabase}
            />
            <SuggesterButtonBox
              onAccept={handleNow}
              onReject={indexIncrementor}
            />
          </>
        ) : activitySuggestions.hasActivities === true ? (
          <Card style={{ marginTop: '4em' }} >
            <CardContent>
              <Typography variant='h1' style={{ marginTop: '0.3em'}}>
                ☹️
              </Typography>
              <Typography variant='h3' style={{ marginTop: '0.3em', textAlign: 'center'}}>
                all saved activities in this category
                <br></br>
                will take longer than {timeAvailable.hours} {pluralize('hour', timeAvailable.hours)} and {timeAvailable.minutes} {pluralize('minute',timeAvailable.minutes)}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Card style={{ marginTop: '4em' }} >
            <CardContent>
              <Typography variant='h1' style={{ marginTop: '0.3em'}}>
                😔
              </Typography>
              <Typography variant='h3' style={{ marginTop: '0.3em', textAlign: 'center'}}>
                there are no activities in this category
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
      <AddActivityButton
        className="addActivityButton"
        component={Link}
        to="/add-activity"
      ></AddActivityButton>
    </>
  );
}