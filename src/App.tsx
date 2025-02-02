import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ChevronLeft, ChevronRight, Menu, X, Award, Users, Clock, Globe, Shield, Zap } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const staffSlides = [
    [
      {
        name: "Akhlack-Uz-Zaman(Bitu)",
        position: "CEO",
        info: "Leading our vision for excellence in telecom solutions.",
        image: "src/bitu.jpg",
        email: "aaz.bitu@gmail.com",
        phone: "01875-553222"
      },
      {
        name: "Tazim Babu",
        position: "CEO",
        info: "Driving innovation and growth in our services.",
        image: "src/tazim.jpg",
        email: "tazimbabu@gmail.com",
        phone: "01913-00000"
      },
      {
        name: "Turjo Rakib",
        position: "Manager",
        info: "Ensuring smooth operations and customer satisfaction.",
        image: "src/tj1.jpg",
        email: "turjorakib@gmail.com",
        phone: "01830-107070"
      }
    ],
    [
      {
        name: "Isla",
        position: "Content Strategist",
        info: "Develops compelling content strategies to boost brand engagement.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
      },
      {
        name: "Kabir",
        position: "Operations Specialist",
        info: "Excels in streamlining processes and ensuring operational efficiency.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
      },
      {
        name: "Priya",
        position: "Social Media Manager",
        info: "Experienced in curating impactful social media campaigns across platforms.",
        image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909"
      }
    ]
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % staffSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + staffSlides.length) % staffSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // Navigation items
  const navItems = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Our Team" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-blue-600">Dada Trading House</a>
                      
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <ul className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Add top padding to account for fixed navbar */}
      <div className="pt-20">
        {/* Hero Section - Enhanced */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full -top-20 -left-20 animate-float"></div>
            <div className="absolute w-96 h-96 bg-blue-400/20 rounded-full top-1/2 -right-20 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute w-64 h-64 bg-blue-300/20 rounded-full bottom-20 left-1/2 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slideInLeft">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Welcome to 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                  Dada Trading House
                  </span>
                </h1>
                <div className="space-y-4">
                  <p className="text-xl text-blue-100">
                    Official Distributor Of ROBI & AIRTEL
                  </p>
                  <p className="text-lg text-blue-200">
                    Authorized distributor for Robi Axiata Limited in Siddhirgonj, Narayanganj
                  </p>
                </div>
                <div className="flex space-x-4">
                <a 
                    href="#about"
                    className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center"
                  >
                    Learn More
                  </a>
                  {/* <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                    Learn More
                  </button> */}
                </div>
              </div>
              
              <div className="hidden lg:block animate-slideInRight">
                <img 
                  src="src/1.jpg" 
                  alt="Telecom Solutions"
                  className="rounded-2xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </section>

        {/* About Section - Enhanced */}
        <section id="about" className="py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-50"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image collage */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623" 
                    alt="Office"
                    className="rounded-2xl shadow-lg hover-card"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2" 
                    alt="Team"
                    className="rounded-2xl shadow-lg hover-card transform translate-y-12"
                  />
                  <img 
                    src="src/2.jpg" 
                    alt="Meeting"
                    className="rounded-2xl shadow-lg hover-card transform translate-y--12"
                  />
                  <img 
                    src="src/3.jpg" 
                    alt="Business"
                    className="rounded-2xl shadow-lg hover-card"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <h2 className="text-4xl font-bold relative">
                  <span className="gradient-text">About Us</span>
                  <div className="absolute -left-8 top-1/2 w-6 h-1 bg-blue-600"></div>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Welcome to Dada Trading House, where excellence meets innovation in telecom solutions. As the official distributor for Robi Axiata Limited, we've been transforming connectivity in Siddhirgonj, Narayanganj for over a decade.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-effect p-6 rounded-xl hover-card">
                    <Globe className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Wide Coverage</h3>
                    <p className="text-gray-600">Serving the entire Narayanganj region</p>
                  </div>
                  <div className="glass-effect p-6 rounded-xl hover-card">
                    <Shield className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Trusted Service</h3>
                    <p className="text-gray-600">Official Robi Axiata partner</p>
                  </div>
                  <div className="glass-effect p-6 rounded-xl hover-card">
                    <Zap className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Fast Support</h3>
                    <p className="text-gray-600">24/7 customer assistance</p>
                  </div>
                </div>
{/* 
                <div className="flex space-x-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">50k+</div>
                    <p className="text-gray-600">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                    <p className="text-gray-600">Support</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl font-bold text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">50,000+</div>
                <div className="text-gray-600 text-lg group-hover:text-blue-600 transition-colors duration-300">Happy Clients</div>
                <div className="mt-4 h-2 w-20 bg-blue-200 group-hover:w-full transition-all duration-500"></div>
              </div>
              <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl font-bold text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">10</div>
                <div className="text-gray-600 text-lg group-hover:text-blue-600 transition-colors duration-300">Years of Experience</div>
                <div className="mt-4 h-2 w-20 bg-blue-200 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 relative">
              Our Services
              <div className="absolute left-1/2 -translate-x-1/2 w-20 h-2 bg-blue-600 mt-4"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Cards */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">SIM Card Distribution</h3>
                <p className="text-gray-600">
                  We offer a variety of SIM cards tailored to meet the diverse needs of individual and business users.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Mobile Recharge Services</h3>
                <p className="text-gray-600">
                  Our efficient mobile recharge services ensure your customers can easily top-up their accounts.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
                <p className="text-gray-600">
                  Our dedicated customer support team is always ready to assist you with any queries or issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 relative">
              Our Team
              <div className="absolute left-1/2 -translate-x-1/2 w-20 h-2 bg-blue-600 mt-4"></div>
            </h2>
            
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {staffSlides.map((slide, slideIndex) => (
                    <div 
                      key={slideIndex}
                      className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                      {slide.map((member, memberIndex) => (
                        <div 
                          key={memberIndex}
                          className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                        >
                          <img 
                            src={member.image}
                            alt={member.name}
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                            <p className="text-gray-600 mb-4">{member.info}</p>
                            {member.email && (
                              <div className="flex items-center text-gray-600 mb-2">
                                <Mail className="w-4 h-4 mr-2" />
                                <span>{member.email}</span>
                              </div>
                            )}
                            {member.phone && (
                              <div className="flex items-center text-gray-600">
                                <Phone className="w-4 h-4 mr-2" />
                                <span>{member.phone}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {staffSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 relative">
              Get in Touch
              <div className="absolute left-1/2 -translate-x-1/2 w-20 h-2 bg-blue-600 mt-4"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">01875-553222</p>
                    <p className="text-gray-600">01830-107070</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">dadatradinghouse@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">Dada Trading House, Siddhirgonj, Narayanganj</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full h-80 md:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.403398268858!2d90.50637167453111!3d23.69728429081495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b6937ea043d7%3A0xad52f908172abb6!2sDada%20Trading%20House!5e0!3m2!1sen!2sbd!4v1738268367972!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-gray-900 to-blue-900 text-white pt-20 pb-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Dada Trading House</h3>
                <p className="text-blue-200">
                  Your trusted partner for telecom solutions in Siddhirgonj, Narayanganj.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Contact Info</h3>
                <div className="space-y-4 text-blue-200">
                  <div className="flex items-center group">
                    <MapPin className="w-5 h-5 mr-3 group-hover:text-blue-400 transition-colors duration-300" />
                    <span className="group-hover:text-white transition-colors duration-300">Siddhirgonj, Narayanganj</span>
                  </div>
                  <div className="flex items-center group">
                    <Phone className="w-5 h-5 mr-3 group-hover:text-blue-400 transition-colors duration-300" />
                    <span className="group-hover:text-white transition-colors duration-300">01875-553222</span>
                  </div>
                  <div className="flex items-center group">
                    <Mail className="w-5 h-5 mr-3 group-hover:text-blue-400 transition-colors duration-300" />
                    <span className="group-hover:text-white transition-colors duration-300">dadatradinghouse@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Quick Links</h3>
                <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    Contact
                  </a>
                </li>
              </ul>

              </div>
            </div>
            <div className="border-t border-blue-800/50 mt-12 pt-8 text-center text-blue-200">
              <p>&copy; 2024 Dada Trading House. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;