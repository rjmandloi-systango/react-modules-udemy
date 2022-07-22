import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiSliceActions } from "./store/ui-slice";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const showCart = useSelector((state) => {
    return state.ui.cartIsVisible;
  });

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiSliceActions.showNotification({
          status: "pending",
          title: "sending...",
          message: "sending cart data",
        })
      );
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
      dispatch(
        uiSliceActions.showNotification({
          status: "success",
          title: "sent",
          message: "sent cart data successfully!!",
        })
      );
      const responseData = await response.json();
      console.log(responseData);
    };

    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((error) =>
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "error",
          message: error,
        })
      )
    );
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
