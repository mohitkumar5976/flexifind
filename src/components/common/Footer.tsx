import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#032541] py-4 sm:py-10 text-white flex justify-start sm:justify-center items-center">
        <div className="w-full max-w-7xl px-4">
          <div className="flex flex-col sm:flex-row flex-wrap gap-8 text-sm font-medium">
            
            {/* Logo */}
            <div className="w-[150px] sm:w-[200px]">
              <Link to="/">
                <img
                  src="/assets/images/app/tmdbBottomLogo.jpg"
                  alt="Logo"
                  className="w-full h-auto"
                />
              </Link>
            </div>

            {/* THE BASICS */}
            <div>
              <ul className="pl-4">
                <li className="text-xl font-bold mb-2">THE BASICS</li>
                <li className="mb-1 hover:underline cursor-pointer">About TMDB</li>
                <li className="mb-1 hover:underline cursor-pointer">Contact Us</li>
                <li className="mb-1 hover:underline cursor-pointer">Support Forums</li>
                <li className="mb-1 hover:underline cursor-pointer">API</li>
                <li className="mb-1 hover:underline cursor-pointer">System Status</li>
              </ul>
            </div>

            {/* GET INVOLVED */}
            <div>
              <ul className="pl-4">
                <li className="text-xl font-bold mb-2">GET INVOLVED</li>
                <li className="mb-1 hover:underline cursor-pointer">About TMDB</li>
                <li className="mb-1 hover:underline cursor-pointer">Contact Us</li>
                <li className="mb-1 hover:underline cursor-pointer">Support Forums</li>
              </ul>
            </div>

            {/* COMMUNITY */}
            <div>
              <ul className="pl-4">
                <li className="text-xl font-bold mb-2">COMMUNITY</li>
                <li className="mb-1 hover:underline cursor-pointer">Guidelines</li>
                <li className="mb-1 hover:underline cursor-pointer">Discussions</li>
                <li className="mb-1 hover:underline cursor-pointer">Leaderboard</li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <ul className="pl-4">
                <li className="text-xl font-bold mb-2">LEGAL</li>
                <li className="mb-1 hover:underline cursor-pointer">Terms of Use</li>
                <li className="mb-1 hover:underline cursor-pointer">API Terms of Use</li>
                <li className="mb-1 hover:underline cursor-pointer">Privacy Policy</li>
                <li className="mb-1 hover:underline cursor-pointer">DMCA Policy</li>
              </ul>
            </div>

          </div>
        </div>
      </footer>

      <p className="text-center py-2 text-lg sm:text-xl font-bold font-[cursive]">
        Developed By Mohit Kumar
      </p>
    </>
  );
};

export default Footer;
