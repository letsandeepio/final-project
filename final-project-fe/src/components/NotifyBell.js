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

const ACTIVITY_QUERY = gql`
  query ActivityQuery {
    activities {
      id
      title
      status
    }
  }
`;

export default function NotifyBell() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { loading, data, refetch } = useQuery(ACTIVITY_QUERY);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <IconButton
        aria-label="show new notifications"
        color="inherit"
        onClick={handleClick}
      >
        <Badge badgeContent={2} color="secondary">
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
        <List dense={false}>
          {data
            ? data.activities.map((item) => {
                return (
                  <ListItem>
                    <ListItemText primary={item.title} key={item.id} />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => alert('yahoo')}
                      >
                        <AlarmOnIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })
            : ''}
        </List>
      </Popover>
    </>
  );
}
