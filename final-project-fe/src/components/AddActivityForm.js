import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useBeforeunload } from 'react-beforeunload';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { gql, useMutation, useLazyQuery } from '@apollo/client';

import Card from '@material-ui/core/Card';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  img: {
    height: 200,
    display: 'block'
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

const IMAGES_QUERY = gql`
  query ImagesBing($searchTerm: String!) {
    images(searchTerm: $searchTerm)
  }
`;

export default function AddActivityForm(props) {
  let history = useHistory();
  const classes = useStyles();
  const { showSnackBar } = props;
  const menuItems = ['watch', 'eat out', 'cook', 'other'].map((category) => (
    <MenuItem key={category} value={category}>{category}</MenuItem>
  ));

  const [category, setCategory] = useState(localStorage.getItem('category') || '');
  const [title, setTitle] = useState(localStorage.getItem('title') || '');
  const [url, setUrl] = useState(localStorage.getItem('url') || '');
  const [hours, setHours] = useState(Number(localStorage.getItem('hours')) ||0);
  const [minutes, setMinutes] = useState(Number(localStorage.getItem('minutes')) || 0);
  const [firstImage, setFirstImage] = useState(localStorage.getItem('firstImage') || true);
  const [currentImageIndex, setCurrentImageIndex] = useState(Number(localStorage.getItem('currentImageIndex')) || 0);

  const [addActivity] = useMutation(ADDACTIVITY_MUTATION, {
    onCompleted(response) {
      const { error } = response;
      if (error) {
        showSnackBar({ message: error, severity: 'error' });
      } else {
        showSnackBar({
          message: 'Successfully added activity!',
          severity: 'success',
        });
      }
    },
    onError(e) {
      showSnackBar({ message: 'Something went wrong.', severity: 'error' });
    },
  });
  
  const [
    fetchImages,
    { loading: loading1, error: error1, data: data1 },
  ] = useLazyQuery(IMAGES_QUERY);

  useEffect(() => {
    if (data1 && data1.images) {
      setUrl(data1.images[0]);
    }
  }, [data1]);

  useBeforeunload(()=> {
    localStorage.removeItem('category');
    localStorage.removeItem('title');
    localStorage.removeItem('url');
    localStorage.removeItem('hours');
    localStorage.removeItem('minutes');
    localStorage.removeItem('firstImage')
    localStorage.removeItem('currentImageIndex')
  })

  function getImage() {
    if (data1 && data1.images && !firstImage) {
      setUrl(data1.images[0]);
    }
    if (title.trim() !== '') {
      fetchImages({ variables: { searchTerm: category === 'watch' ? title + ' movie' : title } });
      setFirstImage(false);
    }
    setCurrentImageIndex(1);
  }

  function getNextImage() {
    if (data1 && data1.images) {
      if (currentImageIndex < data1.images.length - 1) {
        setCurrentImageIndex(prev => prev+1);
      } else {
        setCurrentImageIndex(0);
      }
      setUrl(data1.images[currentImageIndex]);
    }
  }

  function changeTitle(e) {
    setUrl('');
    setFirstImage(true);
    setCurrentImageIndex(1);
    setTitle(e.target.value);
  }

  function addActivityHelper(another) {
    localStorage.setItem('category', category);
    localStorage.setItem('title', title);
    localStorage.setItem('url', url);
    localStorage.setItem('hours', hours);
    localStorage.setItem('minutes', minutes);
    localStorage.setItem('firstImage', firstImage);
    localStorage.setItem('currentImageIndex', currentImageIndex);

    if (!title) {
      showSnackBar({ message: 'Activity name required.', severity: 'warning' });
      return;
    }

    if (!category) {
      showSnackBar({ message: 'Category required.', severity: 'warning' });
      return;
    }

    if (!hours && !minutes) {
      showSnackBar({
        message: 'Valid duration required.',
        severity: 'warning',
      });
      return;
    }

    addActivity({
      variables: {
        title,
        category: category === 'eat out' ? 'eat' : category,
        duration: Number(hours * 60) + Number(minutes),
        image_url: url.trim() === '' ? null : url,
      },
    });
    if (another === false) {
      history.push('/categories');
    } else if (another === true) {
      history.push('/add-activity');
    }
    localStorage.removeItem('category');
    localStorage.removeItem('title');
    localStorage.removeItem('url');
    localStorage.removeItem('hours');
    localStorage.removeItem('minutes');
    localStorage.removeItem('firstImage')
    localStorage.removeItem('currentImageIndex')
  }

  return (
    <section>
      <CssBaseline />
      <div></div>
      <Card className='add-activity-card'>
        <div className='category-div'>
          <span className='category-label' >Category</span>
          {/* <text style={{ marginRight: '2em', alignItems: 'center' }} >Category</text> */}
          <FormControl>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              displayEmpty
            >
              <MenuItem value=""><em>Choose:</em></MenuItem>
              {menuItems}
            </Select>
          </FormControl>
        </div>
        <div className='add-activity-title'>
          <TextField
            id='standard-search'
            label='Activity Name'
            value={title}
            onChange={changeTitle}
            type='search'
            style={{ 
              width: '100%'
            }}
          />
          {title.trim() !== '' && (!firstImage && data1 && data1.images && url !== '' ? (
            <Button onClick={getNextImage} style={{
              fontFamily: 'Fredoka One',
              fontSize: '0.7em',
              justifyContent: 'left',
              textTransform: 'lowercase',
              height: '2em',
              margin: '0.5em',
              paddingRight: '2.6em',
              backgroundColor: '#868686',
              width: 'fit-content',
              color: '#fff' }}>Find&nbsp;New&nbsp;Image</Button>
            ) : (
            <Button onClick={getImage} style={{
              fontFamily: 'Fredoka One',
              fontSize: '0.7em',
              justifyContent: 'left',
              textTransform: 'lowercase',
              height: '2em',
              margin: '0.5em',
              paddingRight: '2.2em',
              backgroundColor: '#e91e63',
              width: 'fit-content',
              color: '#fff' }} >Find&nbsp;An&nbsp;Image!</Button>
          ))}
        </div>
        <br></br>
        <div className='add-activity-title' style={{ marginTop: '0.5em' }}>
          <TextField
            id='add-activity-url'
            label='Image URL'
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setFirstImage(true);
            }}
            style={{ 
              width: '100%'
            }}
          />
          {url.trim() !== '' && <Button onClick={()=>setUrl('')} style={{
              fontFamily: 'Fredoka One',
              fontSize: '0.7em',
              justifyContent: 'left',
              textTransform: 'lowercase',
              height: '2em',
              margin: '0.5em',
              backgroundColor: '#e91e63',
              color: '#fff' }}>Clear URL</Button> }
          {loading1 && <p>loading...</p>}
          {error1 && <p>No images match your request</p>}

        </div>
        <div style={{ marginTop: '1em' }}>
          {url.trim() !== '' && (
            <img className={classes.img} src={url} />
          )}
        </div>
        <div className='duration-div' style={{ marginTop: '2.4em' }} >
          <div>
            <p style={{ marginRight: '1em'}}>Duration</p>
          </div>
          <div className='duration-div'>
            <TextField
              id='add-activity-hours'
              label='Hours'
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              type='number'
              style={{ width: '4em' }}
            />
            <TextField
              id='add-activity-minutes'
              label='Minutes'
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              type='number'
              style={{ width: '4em', marginLeft: '1em' }}
            />
          </div>
        </div>
        <span style={{width: '3em' }}>
        </span>
        <br></br>
        <Button variant='contained' onClick={()=>addActivityHelper(false)} color='primary' style={{
                fontFamily: 'Fredoka One',
                fontSize: '1.2em',
                justifyContent: 'left',
                textTransform: 'lowercase',
                height: '2em',
                marginTop: '2em',
                backgroundColor: '#e91e63',
                color: '#fff' }}>
          Save
        </Button>
        <Button onClick={()=> addActivityHelper(true)} color='primary' style={{
                fontSize: '1.2em',
                justifyContent: 'left',
                textTransform: 'lowercase',
                height: '2em',
                marginTop: '2em',
                marginLeft: '1em',
                color: '#e91e63' }}>
          save and add another
        </Button>
      </Card>
    </section>
  );
}
