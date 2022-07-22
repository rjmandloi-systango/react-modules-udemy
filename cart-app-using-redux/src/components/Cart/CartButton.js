import classes from "./CartButton.module.css";
import { uiSliceActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantityOfItems = useSelector((state) => {
    return state.cart.totalQuantity;
  });
  const toggleCartHandler = () => {
    dispatch(uiSliceActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantityOfItems}</span>
    </button>
  );
};

export default CartButton;
