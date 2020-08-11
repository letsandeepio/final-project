import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import CategoryDropdown from '../components/CategoryDropdown';
import SuggestionCard from '../components/SuggestionCard';
import TimePicker from '../components/TimePicker';
import SuggesterButtonBox from '../components/SuggesterButtonBox';
import sortActivities from '../helpers/sortActivities';
import { useMutation } from '@apollo/client';

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



export default function SuggesterPage(props) {
  const [timeAvailable, setTimeAvailable] = useState(props.timeAvailable)
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [activitySuggestions, setActivitySuggestions] = useState(null);
  const [category, setCategory] = useState(props.category);
  let history = useHistory();

  const { loading, data, refetch } = useQuery(ACTIVITY_QUERY);

  const [changeStatus] = useMutation(CHANGESTATUS_MUTATION, {
    onError(error) {
      console.error(error);
    }
  });

  //------

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //------

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

  useEffect(() => {
    console.log('calling useeffect');
    if (data) {
      const filteredActivities = sortActivities(
        data.activities,
        category,
        timeAvailable,
        'keith',
      );
      setActivitySuggestions(filteredActivities);
    }
  }, [data, timeAvailable, category]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeAvailable, category]);
  
  const indexIncrementor = function () {
    let i = suggestionIndex;
    if (i >= activitySuggestions.activities.length - 1 || activitySuggestions.activities.length === 1) {
      setSuggestionIndex(0);
    } else {
      setSuggestionIndex(i + 1);
    }
  };

  return (
    <>
      <div className="suggestorPage move-down">
        <CategoryDropdown
          questions={props.categories}
          question={props.category}
          onChange={(value) => {
            setCategory(value);
            props.onCategoryChange(value);
          }}
        />
        <TimePicker
          onChange={setTimeAvailable}
          timeAvailable={timeAvailable}
        />

        {loading || activitySuggestions === null ? (
          'loading'
          ) : activitySuggestions.activities.length > 0 ? (
            <>
            <SuggestionCard
              activity={activitySuggestions.activities[suggestionIndex]}
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
        


        <div style={{ width: '400px', textAlign: 'center' }}>
          <Button onClick={handleClickOpen} style={{
                fontSize: '1em',
                justifyContent: 'center',
                textTransform: 'lowercase',
                height: '2em',
                marginTop: '.9em',
                paddingLeft: '1em',
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
                    value={age}
                    onChange={handleChange}
                    input={<Input id="demo-dialog-native" />}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
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
      <AddActivityButton
        className="addActivityButton"
        component={Link}
        to="/add-activity"
      ></AddActivityButton>
    </>
  );
}


//////////////////////








// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

// export default function TemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }