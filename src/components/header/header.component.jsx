import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/stick-and-puck.svg'
import './header.styles.scss';
import CartIcon from '../cart-icon.component/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({currentUser, hidden})=> (
    <div className="header">
        <Link  className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

        <h1 className='headline'>SHARK TANK</h1>

        <div className="options">
            <Link className='option' to='/shop'>
            SHOP
            </Link>
            {/* <Link className='option' to='/contact'>
            CONTACT
            </Link> */}


            {
                currentUser
                ? <div className='option' onClick={()=> auth.signOut()}>Sign Out</div>
                : <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden
            ? null
            : <CartDropdown />
        }
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);