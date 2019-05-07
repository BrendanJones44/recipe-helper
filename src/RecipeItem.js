import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './List.css';

function RecipeItem(props) {
  const { numRequired, numRemaining, name } = props;
  const recipieItemComplete = numRemaining === 0;

  const strikeThroughStyle = recipieItemComplete ? { textDecorationLine: 'line-through', textDecorationStyle: 'solid' } : {}
  return (
   <Paper className="Recipe-item">
      <Typography variant="h6" style={strikeThroughStyle}>
        {numRequired} x {name}
      </Typography>
      <Typography color="textSecondary">
        ({numRemaining} remaining)
      </Typography>
    </Paper>
  )
}

export default RecipeItem;