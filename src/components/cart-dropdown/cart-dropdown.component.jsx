import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
// import { Link, withRouter } from "react-router-dom"; // withRouter allowed us to get access to route props without having to drill them down as component props | map, history and location objects
import { withRouter } from "react-router-dom"; // withRouter allowed us to get access to route props without having to drill them down as component props | map, history and location objects
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden()); // instead of doing the whole mapDispatchToProps we just use the dispatch prop that connect passes to the component when we do not declare mapDispatchToProps and dispatches the action
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
    {/* This is the same as above but using Link component from react-router-dom
    <Link to="/checkout">
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </Link> */}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });
// IMPORTANT ABOUT CONNECT!
// if we do not pass the second argument into the first parameter of connect, mapDispatchToProps, connect does pass dispatch as a prop to the component
// the reason it does this is because if we need to do one of action dispatch there is no reason to write mapDispatchToProps

export default withRouter(connect(mapStateToProps)(CartDropdown));
// withRouter() is a HOC and so it takes a component as a parameter and returns a new one modified with added functionalities, in this case it takes the component out of connect HOC
// we need to get the connected component first and then connect to the router
