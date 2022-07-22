import { uiSliceActions } from "./ui-slice";
import { cartSliceActions } from "./cart";
import cartSlice from "./cart";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-demo-app-post-request-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("unable to get data...");
      }
      const data = await response.json();
      console.log(data);
      return data;
    };
    try {
      const cartData = await fetchData();
      console.log(cartData);
        dispatch(cartSliceActions.replaceCart(cartData))
    } catch (error) {
        console.log(error);
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "error",
          message: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-demo-app-post-request-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending data to firebase failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiSliceActions.showNotification({
          status: "sending...",
          title: "sending",
          message: "sending data to firebase",
        })
      );
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "error",
          message: error,
        })
      );
    }
    dispatch(
      uiSliceActions.showNotification({
        status: "success",
        title: "sent",
        message: "sent cart data successfully!!",
      })
    );
  };
};
