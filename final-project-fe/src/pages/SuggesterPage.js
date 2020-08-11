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
  let history = useHistory();

  const { loading, data, refetch } = useQuery(ACTIVITY_QUERY);

  console.log(data);

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
