import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { Badge } from "@mui/material";
import IconWrapper from "../../atoms/IconWrapper";
import { iconSize } from "../../../constants/globalConstants";

const HeaderIcons = () => {
  return (
    <div className="hidden md:flex flex-row items-center md:space-x-6 ">
      <IconWrapper>
        <AddIcon className="cursor-pointer" style={{ fontSize: `${iconSize}` }}/>
      </IconWrapper>

      <div className="text-white border border-white rounded px-[5px] py-[2px] text-[13px]">
        EN
      </div>

      <IconWrapper>
        <Badge badgeContent={4} color="error">
          <NotificationsIcon className="cursor-pointer" />
        </Badge>
      </IconWrapper>

      <div className="cursor-pointer flex items-center justify-center text-white text-[12px] bg-blue-500 w-[28px] h-[28px] rounded-full">
        M
      </div>

      <IconWrapper>
        <PersonIcon
          className="block  md:hidden"
          style={{ fontSize: `${iconSize}` }}
        />
      </IconWrapper>
    </div>
  );
};

export default HeaderIcons;
