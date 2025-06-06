import { MenuItem, MenuList } from "@mui/material";
import MenuListFC from "../../Header/HeaderCenter/MenuListFC";
import TopNavPopover from "../../Header/HeaderCenter/TopNavPopOver";
import { moviesMenuList, peopleMenuList, tvMenuList } from "./navbarData";

const Navbar = () => {
  return (
    <div className="hidden md:flex flex-row items-center space-x-8">
      <TopNavPopover
        text="Movies"
        menuList={{ type: MenuListFC, data: moviesMenuList }}
      />
      <TopNavPopover
        text="TV Shows"
        menuList={{ type: MenuListFC, data: tvMenuList }}
      />
      <TopNavPopover
        text="People"
        menuList={{ type: MenuListFC, data: peopleMenuList }}
      />
      <TopNavPopover
        text="More"
        menuList={{
          type: ({ onClose }) => (
            <MenuList onClick={onClose}>
              <MenuItem>Discussions</MenuItem>
              <MenuItem>Leaderboard</MenuItem>
              <MenuItem>Support</MenuItem>
              <MenuItem>API</MenuItem>
            </MenuList>
          ),
          data: null, // or [] or {} depending on your component's expectation
        }}
      />
    </div>
  );
};

export default Navbar;
