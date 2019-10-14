import React from 'react';
import { connect } from 'react-redux';
import { ToggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/iconmonstr-shopping-bag-4.svg';
import './cart-icon.styles.scss';

const CartIcon = ( {ToggleCartHidden, itemCount} ) => (
    <div className="cart-icon" onClick={ToggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: ()=> dispatch(ToggleCartHidden())
});

const mapStateToProps = ({ cart:{cartItems} }) => ({
    itemCount: cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
        0
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);