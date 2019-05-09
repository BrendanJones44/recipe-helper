import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';
import { connect } from 'react-redux';

import { takeKitchenItem } from './actions/take-kitchen-item';

import './List.css';

function KitchenItem(props) {
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
  onItemButtonPress: () => dispatch(takeKitchenItem(props.name))
})
export default connect(null, mapActionsToProps)(KitchenItem);