import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-6 text-gray-600 font-medium">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Left Column */}
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h2 className="text-2xl font-bold">Stay Connected</h2>
          <p className="mt-2">
            Follow us on social media for updates and news:
          </p>
          <div className="flex justify-start mt-4 space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-400 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-600 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full sm:w-auto">
          <h2 className="text-2xl font-bold">Download the DERMID App</h2>
          <p className="mt-2">
            Get our app for easy access to your dermatology needs.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 mt-4"
          >
            Download Now
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} DERMID. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
