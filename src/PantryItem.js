import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';
import { connect } from 'react-redux';

import { takePantryItem } from './actions/take-pantry-item';

import './List.css';

function PantryItem(props) {
  const handleClick = () => {
    props.onItemButtonPress(props.name);
  }
  return (
    <Paper className="List-item">
      <Typography variant="h6" align={'left'}>
        {props.name} ({props.count})
      </Typography>
      <Fab className="List-button" data={props.name} size="small" color="secondary" onClick={handleClick}>
        <RemoveIcon />
      </Fab>
    </Paper>
  )
}
const mapActionsToProps = (dispatch, props) => ({
  onItemButtonPress: () => dispatch(takePantryItem(props.name))
})
export default connect(null, mapActionsToProps)(PantryItem);