import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const newPasswordRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordRef.current.value;
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBDsX4YX-Cbrtqx9PFExmObeddk-mHqqUU";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: authContext.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: { "Content-Type": "application / json" },
    }).then((res) => {
      console.log(res);
      history.replace("/");
    });
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          ref={newPasswordRef}
          minLength="7"
          type="password"
          id="new-password"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
