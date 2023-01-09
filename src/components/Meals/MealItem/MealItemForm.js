import React, { useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {

  const cartcntx = useContext(CartContext);
  const addItemToCart = (event) => {
    //update the cartcntxt.items
    event.preventDefault()
    // cartcntx.items.push(props.item)
    const quantity = document.getElementById("amount" + props.id).value;
    
    cartcntx.addItem({...props.item, quantity: quantity})
  } 

  return (
    <form className={classes.form}>
      {/* {console.log(cartcntx)} */}
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
