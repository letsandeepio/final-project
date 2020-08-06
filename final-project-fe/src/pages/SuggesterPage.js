import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import CategoryDropdown from '../components/CategoryDropdown';
import SuggestionCard from '../components/SuggestionCard';
import TimePicker from '../components/TimePicker';
import SuggesterButtonBox from '../components/SuggesterButtonBox';

import sortActivities from '../helpers/sortActivities';

import { useMutation } from '@apollo/client';

const ACTIVITY_QUERY = gql`
  query ActivityQuery {
    activities {
      title
      category
      duration
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
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [activitySuggestions, setActivitySuggestions] = useState([]);
  const [category, setCategory] = useState(props.category);
  let history = useHistory();

  const { loading, error, data } = useQuery(ACTIVITY_QUERY);

  const [changeStatus, statusResponse] = useMutation(CHANGESTATUS_MUTATION, {
    onCompleted(response) {
      console.log(response);
    },
    onError(error) {
      console.log(error);
    }
  });

  function handleNow() {
    /*  changeStatus({
      variables: {
        id: id,
        status: 'progress'
      }
    }); */

    history.push('/success');
  }

  useEffect(() => {
    if (data) {
      const filteredActivities = sortActivities(
        data.activities,
        category,
        props.timeAvailable
      );
      setActivitySuggestions(filteredActivities);
    }
  }, [data, props.timeAvailable, category]);

  const indexIncrementor = function () {
    let i = suggestionIndex;
    if (i >= activitySuggestions.length - 1) {
      setSuggestionIndex(0);
    } else {
      setSuggestionIndex(i + 1);
    }
  };

  return (
    <div className="suggestorPage">
      <CategoryDropdown
        questions={props.categories}
        question={props.category}
        onChange={(value) => {
          setCategory(value);
          props.onCategoryChange(value);
        }}
      />
      <TimePicker
        onChange={props.onTimeChange}
        timeAvailable={props.timeAvailable}
      />
      {loading ? (
        'nothing yet'
      ) : activitySuggestions.length > 0 ? (
        <SuggestionCard activity={activitySuggestions[suggestionIndex]} />
      ) : (
        'nothing yet'
      )}
      <SuggesterButtonBox onAccept={handleNow} onReject={indexIncrementor} />
    </div>
  );
}
