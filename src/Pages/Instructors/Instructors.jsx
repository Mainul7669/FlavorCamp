

  
  import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  const fakeInstructors = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqXs9peDobu-OH6IJvOxI_ZWFBWgtuiSQUw&usqp=CAU",
      numClassesTaken: 5,
      classesTaken: ["Cooking Basics", "Italian Cuisine", "Baking Fundamentals"],
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      photoURL: "https://www.cafemeetingplace.com/media/k2/items/cache/e85ebb8e2b4a906084aaf2d0a18bd568_L.jpg?t=20210603_165222",
      numClassesTaken: 3,
      classesTaken: ["French Cuisine", "Sushi Making"],
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      photoURL: "https://cambridgeculinary.com/wp-content/uploads/2017/08/Simone-Montali.jpg",
      numClassesTaken: 2,
      classesTaken: ["Mexican Street Food"],
    },
 
  ];


  useEffect(() => {
    setInstructors(fakeInstructors);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6">
    {instructors.map((instructor) => (
    <div key={instructor.id} className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={instructor.photoURL} alt={instructor.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{instructor.name}</h2>
        <p>Email: {instructor.email}</p>
        <p>Number of Classes Taken: {instructor.numClassesTaken}</p>
        <p>Classes Taken: {instructor.classesTaken.join(", ")}</p>
        <div className="card-actions justify-end">
        <Link to={`/instructors/${instructor.id}`} className="btn btn-primary">
              See Classes
            </Link>
        </div>
      </div>
    </div>
    ))}
  </div>
  );
};

export default Instructors;
