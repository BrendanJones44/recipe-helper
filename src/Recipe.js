import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './List.css';
import RecipeItem from './RecipeItem';
import ItemsContext from './context/items-context';

function Recipe() {
  const recipeInfo = {
    Kiwis: 3,
    Bananas: 2
  }
  return (
    <Paper className="List-box">
      <Typography variant="h5">
        Fruit Salad Recipe
      </Typography>
      <ItemsContext.Consumer>
        {context => (
          <React.Fragment>
            {Object.keys(recipeInfo).map(function (item) {
              const numRequired = recipeInfo[item]
              const difference = recipeInfo[item] - context.kitchenItems[item];
              console.log("defined?")
              // Don't display negative numbers
              const numRemaining = difference < 0 ? 0 : difference;
              return <RecipeItem name={item} numRequired={numRequired} numRemaining={numRemaining} />
            })}
          </React.Fragment>
        )}
      </ItemsContext.Consumer>
    </Paper>
  )
}

export default Recipe;