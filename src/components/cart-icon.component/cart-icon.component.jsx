import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/iconmonstr-shopping-bag-4.svg';
import './cart-icon.styles.scss';

const CartIcon = () => (
    <div className="cart-icon">
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)
export default CartIcon;