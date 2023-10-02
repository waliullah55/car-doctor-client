import { Link } from "react-router-dom";
import imgLo from "../../assets/icons/delete.svg";

const BookingRow = ({ booking, handleDelete, handleConfirm}) => {
  const { _id, serviceName, photo, email, price, date, status } = booking;

  return (
    <tr>
      <th>
        <Link onClick={() => handleDelete(_id)}>
          <img src={imgLo} alt="" />
        </Link>
      </th>
      <td>
        <div className=" w-24 ">
          <img
            src={photo}
            className="rounded-2xl"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </td>
      <td>{serviceName}</td>
      <td>{email}</td>
      <td>${price}</td>
      <td>{date}</td>
      <th>
      { status === 'confirm' ? <span className="font-semibold">Confirm</span> :
          <button onClick={ () => handleConfirm(_id) }
          className="btn btn-warning font-semibold text-white px-5 py-[10px] bg-[#ff3811]
        border-[#ff3811]">Confirm </button>}
      </th>
    </tr>
  );
};

export default BookingRow;
