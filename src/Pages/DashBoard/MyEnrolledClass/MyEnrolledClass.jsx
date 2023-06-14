import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const MyEnrolledClass = () => {
    const { user } = useContext(AuthContext);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-server-one-theta.vercel.app/payments')
            .then((res) => res.json())
            .then((data) => {
                const filteredHistory = data.filter((payment) => payment.email === user.email);
                const sortedHistory = filteredHistory.sort((a, b) => b.date.localeCompare(a.date));
                setHistory(sortedHistory);
            });
    }, [user.email]);

    return (

        <div className="p-10">
    <div className="flex items-center gap-5 mb-10">
      <h6 className="text-3xl font-bold text-gray-500 tracking-wide">My Enrolled Classes</h6>
      <hr className="w-28 h-0.5 border-t-0 bg-red-500" />
    </div>


            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr className="font-bold">
                        <th>#</th>
                        <th>Image</th>
                        <th>Class Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((classItem, index) => (
                        <tr key={classItem._id}>
                            <td>{index + 1}</td>
                            <td>
                                <img src={classItem.itemsImage} alt={classItem.itemNames} className="w-10 h-10" />
                            </td>
                            <td>{classItem.itemNames}</td>
                            <td>${classItem.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyEnrolledClass;
