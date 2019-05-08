import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './List.css';
import PantryItem from './PantryItem';
import { connect } from 'react-redux'

function Pantry(props) {
  const { items } = props;
  const pantryItems = Object.keys(items).map(function (item) {
    const count = items[item];
    return (
      count > 0 ? <PantryItem name={item} count={count} /> : null
    )
  });
  return (
    <Paper className="List-box">
      <Typography variant="h5">
        My Pantry
      </Typography>
      {pantryItems}
    </Paper>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.pantryItems
  }
}

export default connect(mapStateToProps)(Pantry);