import Aos from "aos";
import {
  Dumbbell,
  HeartPulse,
  Users,
  UtensilsCrossed,
  Sun,
  Zap,
} from "lucide-react";
import { useEffect } from "react";

export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      description:
        "Achieve your goals faster with customized workout plans and one-on-one coaching.",
      gradient: "from-yellow-400 to-yellow-600", // gold-ish gradient
    },
    {
      icon: Users,
      title: "Group Classes",
      description:
        "Join energetic group sessions like Yoga, HIIT, Zumba, and Spin for a fun workout.",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      icon: HeartPulse,
      title: "Cardio & Strength",
      description:
        "Access state-of-the-art cardio machines and a wide range of strength training equipment.",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      icon: UtensilsCrossed,
      title: "Nutrition Guidance",
      description:
        "Get expert advice and meal plans to fuel your body and optimize your fitness results.",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Sun,
      title: "Wellness Programs",
      description:
        "Explore holistic wellness with mindfulness, flexibility, and recovery sessions.",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Zap,
      title: "24/7 Access",
      description:
        "Train anytime, day or night, with secure access to our facilities.",
      gradient: "from-yellow-400 to-yellow-600",
    },
  ];
  useEffect(() => {
        Aos.init({ duration: 800, easing: "ease-in-out" });
      }, []);

  return (
    <section
      id="ss"
      className="relative w-full py-16 md:py-24 lg:py-32 min-h-[80vh] flex items-center justify-center bg-white poppins-regular"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              OUR
            </span>{" "}
            SERVICES
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            At NG Fitness, we offer expert training, personalized plans, group
            workouts, modern equipment, and nutrition support — everything you
            need to stay fit, healthy, and motivated every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="group relative bg-white rounded-2xl shadow-md p-8 text-center cursor-pointer transition-transform duration-500 hover:shadow-xl hover:-translate-y-4"
            >
              <div
                className={`w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:-translate-y-6`}
              >
                <service.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
