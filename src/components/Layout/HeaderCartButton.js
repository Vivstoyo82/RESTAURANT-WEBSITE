import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

    const cartCntxt = useContext(CartContext)
    let quantity = 0;
    cartCntxt.items.forEach(item => {
        quantity = quantity + Number(item.quantity) // here we have converted this to a number because we are getting as a string
    })

    // here below onClick is not a name its a real onClick btn
    return <button className={classes.button} onClick={props.onClick}> 
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart </span>
        {/* <span>{cartCntxt.message}</span> */}
        <span className={classes.badge}>{quantity}</span> 
        {/* here i wil write 3 because here i want the no. of items added in the cart but right now i hard coded this */}
    </button>
};

export default HeaderCartButton;