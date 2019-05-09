import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './List.css';
import KitchenItem from './KitchenItem';
import ItemsContext from './context/items-context';

const Kitchen = () => {
  return (
    <Paper className="List-box">
      <Typography variant="h5">
        My Kitchen Counter
      </Typography>
      <ItemsContext.Consumer>
        {context => (
          <React.Fragment>
            {Object.keys(context.kitchenItems).map(function (item) {
              const count = context.kitchenItems[item];
              return (
                count > 0 ?<KitchenItem name={item} count={count} /> : null
              )
            })}
          </React.Fragment>
        )}
      </ItemsContext.Consumer>
    </Paper>
  )
}

export default Kitchen;