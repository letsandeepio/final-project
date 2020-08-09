import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import { gql, useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { green } from '@material-ui/core/colors';

const ACTIVITY_QUERY = gql`
  query ActivityQuery {
    inProgress {
      id
      title
      status
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

export default function NotifyBell() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { data, refetch } = useQuery(ACTIVITY_QUERY, {
    pollInterval: 10000
  });

  const [changeStatus] = useMutation(CHANGESTATUS_MUTATION, {
    onCompleted() {
      console.log('refetching');
      setAnchorEl(null);
      refetch();
    },
    onError(error) {
      console.error(error);
    }
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function markComplete(id) {
    changeStatus({
      variables: {
        id: Number(id),
        status: 'complete'
      }
    });
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const count = data ? data.inProgress.length : null;

  return (
    <>
      <IconButton
        aria-label="show new notifications"
        color="inherit"
        onClick={handleClick}
      >
        <Badge badgeContent={count} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <List
          dense={false}
          style={{
            width: '220px'
          }}
        >
          {data ? (
            data.inProgress.length > 0 ? (
              data.inProgress.map((item) => {
                return (
                  <ListItem key={item.id}>
                    <ListItemText primary={item.title} />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => markComplete(item.id)}
                      >
                        <AlarmOnIcon style={{ color: green[500] }} />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })
            ) : (
              <ListItem>Nothing in progress.</ListItem>
            )
          ) : (
            'Fetching'
          )}
        </List>
      </Popover>
    </>
  );
}
