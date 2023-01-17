import React from 'react'
import mealsImg from '../../assets/meals.jpg'
import classes from  './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

function Header() {
  return (
    <>
        <header className={classes.header}>
            <h1>HungryHungryGo</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt="table full of delicious food"/>
        </div>
    </>
  )
}

export default Header