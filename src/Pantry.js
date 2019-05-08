import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './List.css';
import PantryItem from './PantryItem';
import ItemsContext from './context/items-context';

function Pantry() {
  return (
    <Paper className="List-box">
      <Typography variant="h5">
        My Pantry
      </Typography>
      <ItemsContext.Consumer>
      { context => (
        <React.Fragment>
          {Object.keys(context.pantryItems).map(function(item) {
            const count = context.pantryItems[item];
            return (
              count > 0
                ?
                <PantryItem name={item} count={count}/>
                : null
            )
          })}
        </React.Fragment>
      )}
      </ItemsContext.Consumer>
    </Paper>
  )
}

export default Pantry;