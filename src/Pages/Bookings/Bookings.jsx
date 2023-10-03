import { useContext, useEffect, useState } from "react";
// import CoverTitle from "../../Components/CoverTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const uri = `http://localhost:5000/checkouts?email=${user?.email}`;
  useEffect(() => {
    fetch(uri, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.error) {
          setBookings(data);
        } else {
          // logout and then logout
          navigate("/");
        }
      });
  }, [uri, navigate]);

  const handleDelete = (id) => {
    const proceed = confirm("want to delete");

    if (proceed) {
      fetch(`http://localhost:5000/checkouts/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = bookings.filter((booki) => booki._id !== id);
            setBookings(remaining);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/checkouts/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        // update data
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booki) => booki._id !== id);
          const update = bookings.find((booki) => booki._id === id);
          update.status = "confirm";
          const newBookings = [update, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Car Doctor | Bookings</title>
      </Helmet>
      {/* <CoverTitle page={"Cart Details"} title={"Cart Details"}></CoverTitle> */}
      <h2>Bokking Quantity: {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-[#151515] text-2xl font-semibold">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox h-8 w-8" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Email</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
