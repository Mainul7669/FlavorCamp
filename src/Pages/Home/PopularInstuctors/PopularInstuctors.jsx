import React, { useEffect, useState } from 'react';


const PopularInstuctors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://assignment-12-server-one-theta.vercel.app/users');
                const data = await response.json();
                const filteredInstructors = data
                    .filter(item => item.role === 'instuctor')
                    .slice(0, 6); // Slice to get only the top 6 instructors
                setInstructors(filteredInstructors);
               
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (

        <div className="p-10">
  <div className="flex items-center gap-5">
    <h6 className="text-base text-gray-500 tracking-wide">INSTRUCTORS</h6>
    <hr className="w-28 h-0.5 border-t-0 bg-red-500" />
  </div>
  <h2 className="font-bold text-3xl tracking-wide">POPULAR INSTRUCTORS</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
    {instructors.map(instructor => (
      <div
        key={instructor._id}
        className="bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-lg font-bold">{instructor.name}</h2>
          <p className="text-gray-700 text-base">{instructor.email}</p>
        </div>
      </div>
    ))}
  </div>
</div>


    );
};

export default PopularInstuctors;