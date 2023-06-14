import React from "react";
import useCarts from "../../../Hooks/useCarts/useCarts";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaDollarSign, FaEdit, FaMoneyBill, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";

const MySelectedClass = () => {
  const [cart, refetch] = useCarts();

  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        confirmButton: "swal-button",
        cancelButton: "swal-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-12-server-one-theta.vercel.app/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Class has been Drop.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="p-10">
      <div className="flex items-center gap-5 mb-10">
        <h6 className="text-3xl font-bold text-gray-500 tracking-wide">
          My Selected Classes
        </h6>
        <hr className="w-28 h-0.5 border-t-0 bg-red-500" />
      </div>

      <div className="uppercase h-[60px] mb-4 align-items-center font-semibold flex justify-evenly">
        <h3 className="text-xl">Total Items : {cart.length}</h3>
        <h3 className="text-xl">Total Price : {total}</h3>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="">
            <tr className="font-bold">
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Price</th>

              <th>Delete</th>
              <th>pay</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className=""> ${item.price}</td>

                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost  bg-rose-400 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
                <td>
                  <Link to="/dashboard/payment">
                    <button className="bg-rose-400 text-white btn btn-primary  btn-sm">
                      {" "}
                      <FaDollarSign /> Pay
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
