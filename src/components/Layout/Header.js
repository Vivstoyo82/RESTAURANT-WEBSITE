import {Fragment} from "react";
import classes from './Header.module.css';
import mealsImage from '../../assets/mealsImage.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            {/* here below using onClick we are passing a pointer in HeaderCartButton with any name we can use onPass also whatever we want here we are using name onCLick */}
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A vessel full of delicious food!" />
        </div>
    </Fragment>
    );
};

export default Header