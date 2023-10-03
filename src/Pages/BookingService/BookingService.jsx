import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import CoverTitle from "../../Components/CoverTitle";
import { useLoaderData } from "react-router-dom";

const BookingService = () => {
  const loadedData = useLoaderData();
  const { img, title, price, service_id } = loadedData;
  console.log(loadedData);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const order = {
      customerName: name,
      date,
      phone,
      email,
      price: price,
      serviceName: title,
      photo: img,
      service_id: service_id,
    };
    console.log(order);
    fetch("http://localhost:5000/checkouts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Order Added Successfully....",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };
  return (
    <div className="mb-16">
      <Helmet>
        <title>Car Doctor | Checkout</title>
      </Helmet>
      <CoverTitle page={"Checkout"}></CoverTitle>
      <div className="bg-[#F3F3F3] p-24 rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              className="py-4 px-6 rounded-xl w-full"
              placeholder="Your Name"
              name="name"
            />
            <input
              type="date"
              className="py-4 px-6 rounded-xl w-full"
              name="date"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="number"
              className="py-4 px-6 rounded-xl w-full"
              placeholder="Phone Number"
              name="phone"
            />
            <input
              placeholder="Enter Email"
              className="py-4 px-6 rounded-xl w-full"
              type="email"
              name="email"
            />
          </div>
          {/* <textarea
            placeholder="Message Here"
            name="message"
            className="textarea  textarea-lg w-full h-64 mb-6"
          ></textarea> */}
          <button className="w-full py-4 rounded-xl text-xl font-semibold text-white bg-[#ff3811] border-[#ff3811]">
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingService;
