import React from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return <>
        <header className={classes.header}>
            <h1>Meals App</h1>
            <HeaderCartButton onClick = {props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img alt='a table full of food' src={mealsImage} />
        </div>
    </>;
}

export default Header;