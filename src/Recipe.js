import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './List.css';
import RecipeItem from './RecipeItem';
import { connect } from 'react-redux';

function Recipe(props) {
  const { kitchenItems } = props;
  const recipeInfo = {
    Kiwis: 3,
    Bananas: 2
  }
  const recipeItems = Object.keys(recipeInfo).map(function (item) {
    const numRequired = recipeInfo[item]
    const difference = recipeInfo[item] - kitchenItems[item];

    // Don't display negative numbers
    const numRemaining = difference < 0 ? 0 : difference;
    return <RecipeItem name={item} numRequired={numRequired} numRemaining={numRemaining } />
  })
  return (
    <Paper className="List-box">
      <Typography variant="h5">
        Fruit Salad Recipe
      </Typography>
      {recipeItems}
    </Paper>
  )
}

const mapStateToProps = (state) => {
  return {
    kitchenItems: state.kitchenItems
  }
}

export default connect(mapStateToProps)(Recipe);