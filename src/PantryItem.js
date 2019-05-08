import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';
import ItemsContext from './context/items-context';
import './List.css';

function PantryItem(props) {
  return (
    <Paper className="List-item">
      <Typography variant="h6" align={'left'}>
        {props.name} ({props.count})
      </Typography>
      <ItemsContext.Consumer>
        {context => (
          <Fab className="List-button" data={props.name} size="small" color="secondary" onClick={context.removePantryItem.bind(this, props.name)}>
            <RemoveIcon />
          </Fab>
        )}
      </ItemsContext.Consumer>
    </Paper>
  )
}

export default PantryItem;