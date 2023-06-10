const PopularInstructors = () => {
    const popularInstructors = [
      {
        name: "Smith",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqXs9peDobu-OH6IJvOxI_ZWFBWgtuiSQUw&usqp=CAU",
        students: 180,
      },
      {
        name: " Johnson",
        image: "https://longlistio.s3.amazonaws.com/jd/sushi-chef-job-description-1659742410.webp",
        students: 70,
      },
      {
        name: "John ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqXs9peDobu-OH6IJvOxI_ZWFBWgtuiSQUw&usqp=CAU",
        students: 150,
      },
      {
        name: "Emily ",
        image: "https://longlistio.s3.amazonaws.com/jd/sushi-chef-job-description-1659742410.webp",
        students: 120,
      },
      {
        name: "Jonmith",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqXs9peDobu-OH6IJvOxI_ZWFBWgtuiSQUw&usqp=CAU",
        students: 80,
      },
      {
        name: "Emihnson",
        image: "https://longlistio.s3.amazonaws.com/jd/sushi-chef-job-description-1659742410.webp",
        students: 90,
      },
    
    ];
  
    const sortedInstructors = popularInstructors.sort(
      (a, b) => b.students - a.students
    );
    const topInstructors = sortedInstructors.slice(0, 6);
  
    return (
      <div className="p-10">
        <div className="flex items-center gap-5">
          <h6 className="text-base text-gray-500 tracking-wide">INSTRUCTORS</h6>
          <hr className="w-28 h-0.5 border-t-0 bg-red-500" />
        </div>
        <h2 className="font-bold text-3xl tracking-wide">POPULAR INSTRUCTORS</h2>
        <div className="grid grid-cols-3 gap-6 mt-8">
          {topInstructors.map((instructor, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-64 h-48 object-cover rounded"
              />
              <h3 className="mt-4 font-semibold text-xl">{instructor.name}</h3>
              <p className="mt-2 text-gray-500">
                {instructor.students} students enrolled
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PopularInstructors;
  