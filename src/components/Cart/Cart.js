import React from "react";
import classes from "./Cart.module.css";
import Modal from "./Modal";

const Cart = (props) => {
  const cartItems = (
    // here below we will use classes['cart-items'] because there is a - there between cart & items.
    <ul className={classes[classes["cart-items"]]}>
      {[{ id: "c1", name: "Chicken Do Pyaza", amount: 2, price: 1100 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>985</span>
        {/* Here above we have right 985 amount as hard coded but later we will derive dynamically */}
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
