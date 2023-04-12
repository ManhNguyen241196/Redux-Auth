import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux"; // tạo thẻ provider
// để có thể sử dụng store liên kết giũa react và redux

import "./index.css";
import App from "./App";

// import store vào react để dùng
import store from "./Store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // khai báo phần Provider giống tương tự như khi khai báo với react context API
  <Provider store={store}>
    <App />
  </Provider>
);
