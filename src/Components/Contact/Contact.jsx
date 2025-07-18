import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaMapMarkerAlt, FaClock } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to start your fitness journey? Contact us today and let's achieve your goals together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <div className="  bg-white border-2 border-gray-200 rounded-lg hover:border-red-300 hover:shadow-lg transition-all duration-300 group">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaPhone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our team</p>
              <a
                href="tel:+1234567890"
                className="inline-block px-6 py-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent rounded-md transition-all duration-300 font-medium"
              >
                +880 19 9372 6235
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your questions</p>
              <a
                href="mailto:info@powergym.com"
                className="inline-block px-6 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent rounded-md transition-all duration-300 font-medium"
              >
                info@ngfitness.com
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white border-2 border-gray-200 rounded-lg hover:border-green-300 hover:shadow-lg transition-all duration-300 group">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaWhatsapp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick chat support</p>
              <a
                href= "https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-transparent rounded-md transition-all duration-300 font-medium"
              >
                   +880 19 9372 6235
              </a>
            </div>
          </div>
        </div>

        {/* Social Media & Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Social Media */}
          <div className="bg-white border-2 border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61550820474044"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaFacebook className="w-8 h-8" />
                </a>
                <a
                  href="https://www.instagram.com/ng_fitness_gym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram className="w-8 h-8" />
                </a>
              </div>
              <div className="text-center mt-6 space-y-2">
                <p className="text-gray-600">Stay updated with our latest workouts,</p>
                <p className="text-gray-600">nutrition tips, and success stories!</p>
              </div>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="bg-white border-2 border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Gym</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-semibold">Address</p>
                    <p className="text-gray-600">123 Fitness Street, Gym City, GC 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaClock className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-semibold">Hours</p>
                    <p className="text-gray-600">24/7 : 5:00 AM - 11:00 PM</p>
                    <p className="text-gray-600">female : 2:00 PM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a href="https://www.google.com/maps/place/NG+Fitness+Gym/@24.02415,90.2730395,18.99z/data=!4m6!3m5!1s0x3755e7007aab32f5:0xcf06bbf6235ccbbf!8m2!3d24.0249083!4d90.2752533!16s%2Fg%2F11w24pf7jr?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D">
          
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
            Click here for see our google location !
          </button>
          </a>
        </div>
      </div>
    </section>
  )
}
