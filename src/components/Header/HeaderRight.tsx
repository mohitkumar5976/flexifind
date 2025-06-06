import DarkModeToggle from "../atoms/DarkModeToggleButton";
import HeaderIcons from "./HeaderRight/HeaderIcons";

const HeaderRight = () => {
  return (
    <div className="flex flex-row items-center space-x-4">
      <HeaderIcons />
      <DarkModeToggle />
    </div>
  );
};

export default HeaderRight;
