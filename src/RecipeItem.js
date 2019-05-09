import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './List.css';

const RecipeItem = props => {
  const { numRequired, numRemaining, name } = props;

  const recipieItemComplete = numRemaining === 0;
  const strikeThroughStyle = { textDecorationLine: 'line-through', textDecorationStyle: 'solid' }
  const dynamicStyle = recipieItemComplete ? strikeThroughStyle : {}

  return (
   <Paper className="Recipe-item">
      <Typography variant="h6" style={dynamicStyle}>
        {numRequired} x {name}
      </Typography>
      <Typography color="textSecondary">
        ({numRemaining} remaining)
      </Typography>
    </Paper>
  )
}

export default RecipeItem;