import AuthDialog from "./AuthDialog";
import services from "../data/services";
import Footer from "./Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 shadow-md px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide">
          <span className="text-white">Flexi</span>
          <span className="text-yellow-300">find</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-8 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="#"
            className="hover:text-yellow-300 transition duration-200"
          >
            Services
          </Link>
          <Link
            to="#"
            className="hover:text-yellow-300 transition duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Login Button */}
        <button
          onClick={() => setShowDialog(true)}
          className="bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-lg shadow hover:bg-gray-100 transition duration-200 text-lg"
        >
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-r from-blue-100 via-white to-blue-50">
        <h2
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight"
          data-aos="fade-down"
        >
          Need Help or Want to Offer Help?
        </h2>
        <p
          className="text-gray-600 text-xl md:text-2xl mb-10 max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Flexifind connects you with reliable people for jobs like cooking,
          cleaning, babysitting, and more — whether you're looking to hire or
          work.
        </p>
        <div
          className="flex justify-center gap-6 flex-wrap"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <button
            onClick={() => setShowDialog(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            I want to Hire
          </button>
          <button
            onClick={() => setShowDialog(true)}
            className="bg-white border border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            I want to Work
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h3
          className="text-3xl font-bold text-gray-800 mb-10 text-center"
          data-aos="fade-up"
        >
          Popular Services
        </h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{service.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modal Dialog */}
      {showDialog && <AuthDialog setShowDialog={setShowDialog} />}
    </div>
  );
};

export default Dashboard;
