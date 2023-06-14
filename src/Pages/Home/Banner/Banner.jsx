import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider w-full h-96">
    <div className="keen-slider__slide number-slide1 flex">
      <div className="w-full sm:w-1/2 bg-black text-white">
        <div className="m-10 sm:pl-10">
          <h1 className="text-4xl font-bold">Become A Professional Chef!</h1>
          <p className="text-lg mt-3">
            Our flagship professional diplomas, TVET programs that
            <br />
            impart ought-to-know knowledge, skills, and industry best
            <br />
            practices to aspiring chefs, and entrepreneurs, enabling
            <br />
            them to seamlessly integrate, effectively deliver and excel
            <br />
            in the hospitality industry globally.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=787&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="keen-slider__slide number-slide2 flex">
      <div className="w-full sm:w-1/2">
        <div className="m-10 sm:pl-10">
          <h1 className="text-4xl font-bold">Become an Expert Home Chef!</h1>
          <p className="text-lg mt-3">
            A programme specially designed for the serious enthusiasts.
            <br />
            Learn the fundamentals, and gain the confidence to make
            <br />
            outstanding classical & contemporary culinary creations at home.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="keen-slider__slide number-slide3 flex">
      <div className="w-full sm:w-1/2">
        <div className="m-10 sm:pl-10">
          <h1 className="text-4xl font-bold">Look no further! </h1>
          <p className="text-lg mt-3">
            Our Culinary Summer Bootcamp School offers an immersive and
            enriching experience for aspiring chefs of all levels. From
            foundational techniques to advanced culinary arts, you'll gain a
            deep understanding of ingredients, flavors, cooking methods, and
            presentation skills.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="keen-slider__slide number-slide4 flex">
      <div className="w-full sm:w-1/2 bg-black text-white">
        <div className="m-10 sm:pl-10">
          <h1 className="text-4xl font-bold">Executive Chef (aka Group Chef)</h1>
          <p className="text-lg mt-3">
            Experience the camaraderie of working in a professional kitchen.
            Collaborate with fellow culinary enthusiasts, exchange ideas, and
            create delectable dishes together. Build lasting friendships and
            connections within the culinary community.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <img
          src="https://img.freepik.com/free-photo/back-back-gastronomy-experts-standing-restaurant-professional-kitchen-while-posing-camera-chefs-wearing-cooking-uniformswhile-standing-gourmet-cuisine-with-arms-crossed_482257-41991.jpg?w=2000"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
  );
};

export default Banner;
