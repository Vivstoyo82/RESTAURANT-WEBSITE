import React from "react";
import classes from './MealItem.module.css';

const MealItem = (props) => {
    const price = `Rs.${props.price.toFixed(2)}` // toFixed(2) Number of digits after decimal point. Must be in the range 0-20 and return a string representing a number in fixed-point notation

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
