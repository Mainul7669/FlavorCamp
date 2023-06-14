import React, { useEffect, useState } from 'react';
import UseClass from '../../../Hooks/UseClass/UseClass';
import { FaCalendarPlus, FaChair, FaDollarSign, FaIdBadge, FaList, FaMusic } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCarts from '../../../Hooks/useCarts/useCarts';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const PopularClass = () => {
  const [classes] = UseClass();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [, refetch] = useCarts();
  const location = useLocation();
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [numOfStudent, setNumOfStudent] = useState({});
  const [topClasses, setTopClasses] = useState([]);

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
        setNumOfStudent(studentCount);
      });
  }, []);

  useEffect(() => {
    const sortedClasses = [...classes].sort((a, b) => {
      const numOfStudentsA = numOfStudent[a.name] || 0;
      const numOfStudentsB = numOfStudent[b.name] || 0;
      return numOfStudentsB - numOfStudentsA;
    });
    setTopClasses(sortedClasses.slice(0, 6));
  }, [classes, numOfStudent]);

  const handleSelect = classItem => {
    if (user && user.email) {
      const selectItem = {
        classItem: classItem._id,
        name: classItem.name,
        image: classItem.image,
        email: user.email,
        price: classItem.price
      };

      fetch('https://assignment-12-server-one-theta.vercel.app/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            setSelectedClasses(prevSelectedClasses => [
              ...prevSelectedClasses,
              classItem._id
            ]);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Class has been Added',
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
    } else {
      Swal.fire({
        title: 'Please Login to Select the Class',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (

    <div className="p-10">
    <div className="flex items-center gap-5">
      <h6 className="text-base text-gray-500 tracking-wide">CLASSES</h6>
      <hr className="w-28 h-0.5 border-t-0 bg-red-500" />
    </div>
    <h2 className="font-bold text-3xl tracking-wide">POPULAR CLASSES</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
      {topClasses.map((classItem, index) => (
        classItem.statusbar === 'approved' && (
          <motion.div
            key={classItem._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              src={classItem.image}
              alt={classItem.name}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <div className="p-6">
              <h2 className="text-lg font-bold">{classItem.name}</h2>
              <h2>
                Price: <span className="font-bold">{classItem.price}</span>
              </h2>
              <h1 className="text-gray-500">
                <span>Instructor:</span> {classItem.instructor}
              </h1>
              <h2 className="text-gray-500">Number of Students: {numOfStudent[classItem.name] || 0}</h2>
            </div>
          </motion.div>
        )
      ))}
    </div>
  </div>

  );
};

export default PopularClass;
