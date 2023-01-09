import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    // here below onClick is not a name its a real onClick btn
    return <button className={classes.button} onClick={props.onClick}> 
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}> 3 </span> 
        {/* here i wil write 3 because here i want the no. of items added in the cart but right now i hard coded this */}
    </button>
};

export default HeaderCartButton;