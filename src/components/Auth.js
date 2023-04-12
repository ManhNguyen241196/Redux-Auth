import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";

import { authActions } from "../Store";

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login()); // khi trỏ trực tiếp vào 1 action trong index thì
    //nó sẽ được kích hoạt reducer và set state lại giá trị của state . Và đương nhiên sẽ render
    //lại hiển thị của web.
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
