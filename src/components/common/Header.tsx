import { useEffect, useState } from "react";
import HeaderCenter from "../Header/HeaderCenter";
import HeaderLeft from "../Header/HeaderLeft";
import HeaderRight from "../Header/HeaderRight";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10); // small threshold to avoid micro jitter
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-primary text-white transition-all duration-300 ease-in-out ${
        isSticky ? "shadow-md backdrop-blur-sm" : "shadow-none"
      }`}
    >
      <div
        className={`flex items-center justify-between pl-2 pr-4 transition-all duration-300 ${
          isSticky ? "py-2" : "py-2"
        }`}
      >
        <div className="flex items-center space-x-8">
          <HeaderLeft />
          <HeaderCenter />
        </div>
        <HeaderRight />
      </div>
    </header>
  );
};

export default Header;
