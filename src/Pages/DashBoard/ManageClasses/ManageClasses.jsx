import React from "react";
import UseClass from "../../../Hooks/UseClass/UseClass";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useCarts from "../../../Hooks/useCarts/useCarts";

const ManageClasses = () => {
  const [classes] = UseClass();
  const [, refetch] = useCarts();

  const handleApproved = (classes) => {
    fetch(`https://assignment-12-server-one-theta.vercel.app/class/approved/${classes._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Status approved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeny = (classes) => {
    Swal.fire({
      title: "Enter Feedback",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      customClass: {
        confirmButton: "swal-button",
        cancelButton: "swal-button",
      },
      preConfirm: (feedback) => {
        return fetch(`https://assignment-12-server-one-theta.vercel.app/class/deny/${classes._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ feedback }), // Include the feedback in the request body
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Status Denied",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "An error occurred",
              showConfirmButton: false,
              timer: 1500,
            });
            console.log(error);
          });
      },
    });
  };

  return (
    <div className="p-10">
      <div className="flex items-center gap-5 mb-10">
        <h6 className="text-3xl font-bold text-gray-500 tracking-wide">
          Manage Classes
        </h6>
        <hr className="w-28 h-0.5 border-t-0 bg-red-500" />
      </div>

      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                   {item.instructor}
                  </td>
                  <td>
                    {item.email}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    {item.statusbar === "pending" ? (
                      <div className="flex gap-2">
                        {item.statusbar === "approved" ? (
                          "approved"
                        ) : (
                          <button
                            onClick={() => handleApproved(item)}
                            className="btn btn-success btn-sm"
                          >
                            Approved
                          </button>
                        )}
                        {item.statusbar === "deny" ? (
                          "deny"
                        ) : (
                          <button
                            onClick={() => handleDeny(item)}
                            className="btn bg-rose-400 btn-error text-white btn-sm"
                          >
                            Deny
                          </button>
                        )}
                      </div>
                    ) : (
                      item.statusbar
                    )}
                  </td>
                  <td>{item.totalStudents}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
