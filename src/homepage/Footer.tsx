import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand / About */}
        <div>
          <h4 className="text-xl font-semibold mb-4">FlexiFind</h4>
          <p className="text-sm text-gray-400">
            Your trusted partner for cooks, cleaners, plumbers, and more —
            on-demand, reliable, and affordable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Popular Services */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Popular Services</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Cook for Home</li>
            <li>House Cleaning</li>
            <li>Event Helpers</li>
            <li>Delivery Assistants</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-blue-400" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-blue-400" />
              support@homehelp.com
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-blue-400" />
              Delhi, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Flexifind. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
