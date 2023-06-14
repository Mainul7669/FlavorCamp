import React, { useEffect, useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { AuthContext } from '../../../Providers/AuthProvider';

const PaymentHistory = () => {
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
        <div className="overflow-x-auto w-full p-10">
           

    <div className="flex items-center gap-5 mb-10">
      <h6 className="text-3xl font-bold text-gray-500 tracking-wide">My Payment History</h6>
      <hr className="w-28 h-0.5 border-t-0 bg-red-500" />
    </div>

            <table className="table w-full">
                <thead>
                    <tr className="font-bold">
                        <th>#</th>
                        <th>Date</th>
                        <th>Email</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Transaction ID</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((payment, index) => (
                        <tr key={payment._id}>
                            <td>{index + 1}</td>
                            <td>{new Date(payment.date).toLocaleDateString()}</td>
                            <td>{payment.email}</td>
                            <td>{payment.itemNames}</td>
                            <td>${payment.price}</td>
                            <td>{payment.transactionId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;