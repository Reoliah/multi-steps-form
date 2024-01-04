import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@redux-devtools/extension";

import userReducer from "../redux/details/userDetails";
import dataReducer from "../redux/details/userData";

export default configureStore(
  {
    reducer: {
      user: userReducer,
      data: dataReducer,
    },
  },
  // devToolsEnhancer()
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
