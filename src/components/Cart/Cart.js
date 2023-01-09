import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "./Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const nameOfFood = useContext(CartContext);

  const cartItems = (
    // here below we will use classes['cart-items'] because there is a - there between cart & items.
    <ul className={classes[classes["cart-items"]]}>
      {nameOfFood.items.map(
        (item) => (
          <li>Food : {item.name}  Price : {item.price}  Quantity : {item.quantity}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>985</span>
        {/* Here above we have right 985 amount as hard coded but later we will derive dynamically */}
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
