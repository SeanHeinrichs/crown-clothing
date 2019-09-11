import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ( { toggleCartHidden, itemCount } ) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// This is called a selected. Gets entire state and then pulls of a portion.
// We get cartItems then reduce over it to get the quantity.
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon);

