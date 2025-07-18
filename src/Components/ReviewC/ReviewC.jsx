import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronRight } from "lucide-react";

export default function ReviewC() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Rahim uttdin",
      image:
        "https://img.freepik.com/premium-photo/handsome-strong-athletic-man-pumping-up-muscles-workout-fitness-bodybuilding-concept-background-muscular-bodybuilder-fitness-men-doing-arms-abs-back-exercises-gym-naked-torso_174475-112.jpg?w=360",
      reviewText:
        "Joining NG Fitness Gym was the best decision I've made for my health! The trainers are incredibly supportive, and the equipment is top-notch. I've seen amazing results in just a few months.",
    },
    {
      id: 2,
      name: "Sakib Sarkar Emon",
      image:
        "https://images.pexels.com/photos/29825224/pexels-photo-29825224/free-photo-of-muscular-man-lifting-weights-at-gym.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      reviewText:
        "The group classes are fantastic! So much energy and variety. It's a great community, and I always leave feeling motivated. Highly recommend for anyone looking to get fit and have fun.",
    },
    {
      id: 3,
      name: "Sanny ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjs4oIW94Lh8ZXDAXrSj8Szf-M1YVofKxIQ&s",
      reviewText:
        "I appreciate the clean facilities and the wide range of machines available. It never feels overcrowded, and I can always get my workout in. The staff is friendly and helpful too!",
    },
    {
      id: 4,
      name: "Rony Coleman",
      image:
        "https://img.drz.lazcdn.com/static/bd/p/7fcf5bef99b279417553ca2587feddda.jpg_720x720q80.jpg",
      reviewText:
        "Personal training here is a game-changer. My trainer created a custom plan that fits my busy schedule and goals perfectly. I'm stronger and more confident than ever before.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [reviews.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section
      id="reviews"
      className="w-full pt-20 lg:pt-[160px] pb-16 md:pb-24 lg:pb-32 bg-white relative text-gray-800"
    >
      {/* SVG Wave at top */}
      <div
        className="absolute top-0 left-0 w-full hidden lg:block pointer-events-none"
        style={{ zIndex: 100 }}
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="block w-full h-auto">
          <path
            fill="#FFFDF9"
            fillOpacity="1"
            d="M0,256L12.6,245.3C25.3,235,51,213,76,192C101.1,171,126,149,152,160C176.8,171,202,213,227,245.3C252.6,277,278,299,303,256C328.4,213,354,107,379,96C404.2,85,429,171,455,197.3C480,224,505,192,531,160C555.8,128,581,96,606,101.3C631.6,107,657,149,682,160C707.4,171,733,149,758,122.7C783.2,96,808,64,834,80C858.9,96,884,160,909,170.7C934.7,181,960,139,985,122.7C1010.5,107,1036,117,1061,149.3C1086.3,181,1112,235,1137,261.3C1162.1,288,1187,288,1213,277.3C1237.9,267,1263,245,1288,234.7C1313.7,224,1339,224,1364,229.3C1389.5,235,1415,245,1427,250.7L1440,256L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight ">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              What Our
            </span>{" "}
            Members Say
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto poppins-regular">
            Hear directly from our community about their fitness journey and
            experience at NG Fitness Gym.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" data-aos="fade-up">
          <div className="relative h-[450px] sm:h-[400px] md:h-[350px] overflow-hidden rounded-3xl shadow-2xl border border-gray-200 bg-white">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`absolute inset-0 p-8 sm:p-12 flex flex-col items-center justify-center text-center transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="p-1 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 mb-6 shadow-md">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-white">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <p className="text-lg sm:text-xl italic text-gray-700 mb-4 max-w-2xl">
                  &ldquo;{review.reviewText}&rdquo;
                </p>

                <p className="font-semibold text-gray-900 text-base sm:text-lg">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
{/* 
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button> */}

          <div
            className="flex justify-center space-x-2 mt-8"
            data-aos="fade-up"
          >
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-yellow-500 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
