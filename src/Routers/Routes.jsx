import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPages from "../Pages/Shared/ErrorPages";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      // errorElement: <ErrorPages></ErrorPages>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;