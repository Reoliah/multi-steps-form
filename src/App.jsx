//rrd import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import root
import Root from "./layout/Root";

//Landing
import Landing from "./pages/Landing";

//select plan page
import Plans from "./component/Plans";
//add-on page
import AddOns from "./component/AddOns";
//summary page
import Summary from "./component/Summary";
//confirmation page
import Confirm from "./component/Confirmation";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "selectPlan",
        element: <Plans />,
      },
      {
        path: "add-ons",
        element: <AddOns />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
      {
        path: "confirmation",
        element: <Confirm />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-ubuntu">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
