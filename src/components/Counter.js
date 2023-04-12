import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../Store";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isShow = useSelector((state) => state.counter.showCounter);

  const IncreHandler = () => {
    dispatch(counterActions.increment());
  };

  const IncreBy5Handler = () => {
    dispatch(counterActions.incrementby5(5));
  };
  const DecreHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  //------------Khi chỉ sử dụng redux bình thuong------------
  // const IncreHandler = () => {
  //   dispatch({ type: "increment" });
  // };

  // const IncreBy5Handler = () => {
  //   dispatch({ type: "incrementby5", amount: 5 }); // ngoài function này gọi tới dispatch
  //   // nhờ vào biến type để chọc thẳng vào store được lưu trữ để gọi hàm render tương ứng THÌ nó
  //   //còn truyền thêm 1 biến amount 5
  //   // dòng dispatch này trả lại 1 object có chứa các key và value trong ()
  //   // phần reducer có thể sử dụng bằng các gọi key action và trỏ trực tiếp vào biến
  // };

  // const DecreHandler = () => {
  //   dispatch({ type: "decrement" });
  // };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };
  //---------------------------------------------------------

  const content = (
    <>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={IncreHandler}>Incre</button>
        <button onClick={IncreBy5Handler}>Increby5</button>
        <button onClick={DecreHandler}> Decre</button>
      </div>
    </>
  );
  return (
    <main className={classes.counter}>
      {isShow ? content : ""}

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
