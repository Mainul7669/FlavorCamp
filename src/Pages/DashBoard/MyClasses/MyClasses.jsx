import React, { useContext, useEffect, useState } from 'react';
import UseClass from '../../../Hooks/UseClass/UseClass';
import { FaEdit } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { AuthContext } from '../../../Providers/AuthProvider';

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes] = UseClass();
  const [numOfStudents, setNumOfStudents] = useState({});

  // Filter classes based on user email
  const userClasses = classes.filter(item => item.email === user.email);

  useEffect(() => {
    fetch('https://assignment-12-server-one-theta.vercel.app/payments')
      .then(res => res.json())
      .then(data => {
        const studentCount = data.reduce((count, item) => {
          if (count[item.itemNames]) {
            count[item.itemNames] += 1;
          } else {
            count[item.itemNames] = 1;
          }
          return count;
        }, {});
        setNumOfStudents(studentCount);
      });
  }, []);

  return (
    <div className="p-10">
      <div className="flex items-center gap-5 mb-10">
        <h6 className="text-3xl font-bold text-gray-500 tracking-wide">My Classes</h6>
        <hr className="w-28 h-0.5 border-t-0 bg-red-500" />
      </div>

      <div className="w-full">
        <div className="overflow-x-auto">
          <motion.table
            className="table"
            initial={{ opacity: 0 }} // Initial opacity
            animate={{ opacity: 1 }} // Animated opacity
            transition={{ duration: 0.5 }} // Animation duration
          >
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Total Students</th>
                <th>Feedback</th>
                <th>Update</th>
              </tr>
            </thead>
            <motion.tbody>
              {/* rows */}
              {userClasses.map((item, index) => (
                <motion.tr
                  key={item._id}
                  initial={{ opacity: 0, y: 10 }} // Initial opacity and vertical position
                  animate={{ opacity: 1, y: 0 }} // Animated opacity and vertical position
                  transition={{ duration: 0.5, delay: index * 0.1 }} // Animation duration and delay
                >
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.statusbar}</td>
                  <td>{numOfStudents[item.name] || 0}</td>
                  <td>{item.feedback}</td>
                  <td>
                    <button className="btn btn-ghost bg-rose-400 text-white">
                      <FaEdit />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </motion.table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
