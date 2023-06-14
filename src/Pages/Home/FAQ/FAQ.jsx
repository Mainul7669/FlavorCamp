import { motion } from "framer-motion";

const FAQ = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const imageVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl tracking-wide">Why Choose FLAVORCAMP?</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6"
        >
          <motion.img
            variants={imageVariants}
            whileHover="hover"
            src="https://www.samtell.com/hubfs/Blogs/SamTell-Blog-How-Much-Does-Restaurant-Kitchen-Equipment-Cost.jpg"
            alt="Facilities"
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-4 font-semibold text-xl">State-of-the-Art Facilities</h3>
          <p className="mt-2 text-gray-500">
            Explore our modern kitchen facilities equipped with the latest culinary tools and equipment.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6"
        >
          <motion.img
            variants={imageVariants}
            whileHover="hover"
            src="https://assets-global.website-files.com/5fe81966f6f5aa31b7c17439/6287384744eb0c10a4dcfc8c_Professional%20Home%20Page-min.jpg"
            alt="Awards"
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-4 font-semibold text-xl">Award-Winning Instructors</h3>
          <p className="mt-2 text-gray-500">
            Learn from our award-winning instructors who have years of experience in the culinary industry.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6"
        >
          <motion.img
            variants={imageVariants}
            whileHover="hover"
            src="https://assets-global.website-files.com/5fe870209b4f367ca43b8b48/6095cc7931720a098f5a0248_nasaerene.jpg"
            alt="Events"
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-4 font-semibold text-xl">Exciting Culinary Events</h3>
          <p className="mt-2 text-gray-500">
            Immerse yourself in our culinary events and workshops where you can showcase your skills with industry professionals.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6"
        >
          <motion.img
            variants={imageVariants}
            whileHover="hover"
            src="https://www.jwu.edu/news/2022/04/images/nutritional-food-1023x576.jpg"
            alt="Promote Healthy Eating"
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-4 font-semibold text-xl">Promote Healthy Eating</h3>
          <p className="mt-2 text-gray-500">
            Culinary arts programs ensure students have a firm understanding of baking and pastry concepts, basic cooking techniques and plating, along with the nutritional content of their prepared meals.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
