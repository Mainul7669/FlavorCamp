
const PopularClasses = () => {
  // Sample data for popular classes
  const popularClasses = [
    {
      title: "Italian Cuisine Masterclass",
      image: "https://www.realsimple.com/thmb/n7LREb712VOF9dHoWYQFKAxidMw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/italian-food-2000-465639d6117745278d67deebd968cd1e.jpg",
      students: 120,
    },
    {
      title: "Art of Sushi Making",
      image: "https://www.realsimple.com/thmb/n7LREb712VOF9dHoWYQFKAxidMw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/italian-food-2000-465639d6117745278d67deebd968cd1e.jpg",
      students: 98,
    },
    {
      title: "French Pastry Delights",
      image: "https://www.realsimple.com/thmb/n7LREb712VOF9dHoWYQFKAxidMw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/italian-food-2000-465639d6117745278d67deebd968cd1e.jpg",
      students: 85,
    },
    {
      title: "Thai Street Food Feast",
      image: "https://www.realsimple.com/thmb/n7LREb712VOF9dHoWYQFKAxidMw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/italian-food-2000-465639d6117745278d67deebd968cd1e.jpg",
      students: 76,
    },
    {
      title: "Gourmet BBQ Techniques",
      image: "https://www.realsimple.com/thmb/n7LREb712VOF9dHoWYQFKAxidMw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/italian-food-2000-465639d6117745278d67deebd968cd1e.jpg",
      students: 64,
    },
    {
      title: "Farm-to-Table Cooking",
      image: "https://www.realsimple.com/thmb/n7LREb712VOF9dHoWYQFKAxidMw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/italian-food-2000-465639d6117745278d67deebd968cd1e.jpg",
      students: 52,
    },
  ];

  // Sort classes based on the number of students
  const sortedClasses = popularClasses.sort((a, b) => b.students - a.students);
  // Select the top 6 classes
  const topClasses = sortedClasses.slice(0, 6);

  return (
    <div className="p-10">
      <div className="flex items-center gap-5">
        <h6 className="text-base text-gray-500 tracking-wide">CLASSES</h6>
        <hr className="w-28 h-0.5 border-t-0 bg-red-500" />
      </div>
      <h2 className="font-bold text-3xl tracking-wide">POPULAR CLASSES</h2>
      <div className="grid grid-cols-3 gap-6 mt-8">
        {topClasses.map((classItem, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={classItem.image}
              alt={classItem.title}
              className="w-64 h-48 object-cover rounded"
            />
            <h3 className="mt-4 font-semibold text-xl">{classItem.title}</h3>
            <p className="mt-2 text-gray-500">
              {classItem.students} students enrolled
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
