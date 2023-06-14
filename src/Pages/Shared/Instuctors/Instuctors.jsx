import React, { useEffect, useState } from 'react';

const InstructorData = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://assignment-12-server-one-theta.vercel.app/users');
                const data = await response.json();
                const filteredInstructors = data.filter(item => item.role === 'instuctor');
                setInstructors(filteredInstructors);
                console.log(filteredInstructors);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (

        <div className="flex flex-wrap justify-center">
        {instructors.map(instructor => (
          <div key={instructor._id} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg">
              <img src={instructor.image} alt={instructor.name} className="object-cover w-full h-48 rounded-t-lg" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{instructor.name}</div>
                <p className="text-gray-700 text-base">{instructor.email}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>

    
    );
}

export default InstructorData;