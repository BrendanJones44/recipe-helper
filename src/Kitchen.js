import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './List.css';
import KitchenItem from './KitchenItem';
import { connect } from 'react-redux'

function Kitchen(props) {
  const { items } = props;
  const kitchenItems = Object.keys(items).map(function(item) {
    const count = items[item];
    return (
      count > 0 ? <KitchenItem name={item} count={count}/> : null
    )
  });
  return (
    <Paper className="List-box">
      <Typography variant="h5">
        My Kitchen Counter
      </Typography>
      { kitchenItems }
    </Paper>
  )
}

const mapStateToProps = (state, props) => {
  return {
    name: props.name,
    items: state.kitchenItems
  }
}

export default connect(mapStateToProps)(Kitchen);