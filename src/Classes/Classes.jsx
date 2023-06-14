import React, { useEffect, useState } from 'react';
import UseClass from '../../../Hooks/UseClass/UseClass';
import {  FaChair, FaDollarSign, FaIdBadge, FaList,  } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCarts from '../../../Hooks/useCarts/useCarts';
import { useContext } from 'react';
import UseAdmin from '../../../Hooks/UseAdmin';
import UseInstructor from '../../../Hooks/UseInstuctor';

const Classes = () => {
    const [classes] = UseClass();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [, refetch] = useCarts();
    const location = useLocation();
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [numOfStudent, setNumOfStudent] = useState({});

    const [isAdmin] = UseAdmin();
    const [isInstructor] = UseInstructor();

    useEffect(() => {
        fetch('http://localhost:5000/payments')
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

    const handleSelect = classItem => {
        if (user && user.email) {
            const selectItem = {
                classItem: classItem._id,
                name: classItem.name,
                image: classItem.image,
                email: user.email,
                price: classItem.price
            };

            fetch('http://localhost:5000/carts', {
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

    return (

        <div className="">
  <div className="my-20 grid gap-8 xl:grid-cols-4  mx-12">
    {classes.map(classItem => (
      classItem.statusbar === 'approved' && (
        <div
          key={classItem._id}
          className="card w-full my-4 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300"
        >
          <figure className="relative">
            <img className="w-full h-48 object-cover" src={classItem.image} alt="Shoes" />
            <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-lg font-bold">
              {classItem.price}
            </div>
          </figure>
          <div className="px-6 py-4">
            <h2 className="text-lg font-bold mb-2">{classItem.name}</h2>
            <p className="text-gray-700 mb-3">Instructor: {classItem.instructor}</p>
            <p className="text-gray-700 mb-3">Available Seat: {classItem.seat}</p>
            <p className="text-gray-700">Number of Students: {numOfStudent[classItem.name] || 0}</p>
          </div>
          <div className="px-6 py-4 flex justify-end">
            <button
              onClick={() => handleSelect(classItem)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              disabled={isAdmin || isInstructor || selectedClasses.includes(classItem._id)}
            >
              {selectedClasses.includes(classItem._id) ? 'Selected' : 'Select'}
            </button>
          </div>
        </div>
      )
    ))}
  </div>
</div>


    );
};

export default Classes;
