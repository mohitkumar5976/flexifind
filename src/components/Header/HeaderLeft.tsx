import HeaderLogo from "./HeaderLeft/HeaderLogo";
import MobileDrawer from "./HeaderLeft/MobileDrawer";

const HeaderLeft = () => {
  return (
    <div className="flex flex-row items-center">
      <MobileDrawer />
      <HeaderLogo />
    </div>
  );
};

export default HeaderLeft;
