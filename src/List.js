import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './List.css';
import ListItem from './ListItem';

function List(props) {
  const { items, name, onItemButtonPress } = props;
  const listItems = Object.keys(items).map(function(item) {
    const count = items[item];
    return (
      count > 0
       ?
      <ListItem name={item} count={items[item]} onItemButtonPress={onItemButtonPress}/>
      : null
    )
  });
  return (
    <Paper className="List-box">
      <Typography variant="h5">
        { name }
      </Typography>
      { listItems }
    </Paper>
  )
}

export default List;