import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPages from "../Pages/Shared/ErrorPages";
import SignUp from "../Pages/Shared/SingUp";
import Login from "../Pages/Shared/Login";
// import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Checkout from "../Pages/Checkout/Checkout";
import AddService from "../Pages/AddService/AddService";
import PrivateRouter from "./PrivateRouter";
import BookingService from "../Pages/BookingService/BookingService";
import Bookings from "../Pages/Bookings/Bookings";
import Products from "../Pages/Home/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      // {
      //   path: '/serviceDetails/:id',
      //   element: <PrivateRouter> <ServiceDetails></ServiceDetails></PrivateRouter>,
      //   loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      // },
      {
        path: "/book/:id",
        element: (
          <PrivateRouter>
            <BookingService></BookingService>{" "}
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRouter>
            <Checkout />
          </PrivateRouter>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRouter>
            <AddService></AddService>
          </PrivateRouter>
        ),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRouter>
            <Bookings />
          </PrivateRouter>
        ),
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch('http://localhost:5000/totalProduct')
      },
    ],
  },
]);

export default router;
