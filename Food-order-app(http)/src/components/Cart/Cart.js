import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isOrderPlacing, setIsOrderPlacing] = useState(false);
  const [isPlaced, setIsPlaced] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsOrderPlacing(true);
    await fetch(
      "https://react-demo-app-post-request-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItem: cartCtx.items,
        }),
      }
    );
    setIsOrderPlacing(false);
    setIsPlaced(true);
    cartCtx.clearCart();
    setTimeout(() => {
      props.onClose();
    }, 2000);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>

      {hasItems && (
        <button onClick={orderHandler} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  const modalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onSubmit={submitOrderHandler}
          onCancel={props.onClose}
        ></Checkout>
      )}
      {!isCheckout && modalActions}
    </>
  );

  const orderPlacingContent = <p>Your order is submitting...</p>;
  const orderPlacedContent = <p>Order placed successfully...</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isOrderPlacing && !isPlaced && modalContent}
      {isPlaced && !isOrderPlacing && orderPlacedContent}
      {isOrderPlacing && orderPlacingContent}
    </Modal>
  );
};

export default Cart;
