import React from "react";
import { MenuItem, MenuList, Paper } from "@mui/material";

interface MenuItemData {
  id: string | number;
  title: string;
}

interface MenuListFCProps {
  menuList: MenuItemData[];
  onClose: () => void;
}

const MenuListFC: React.FC<MenuListFCProps> = ({ menuList, onClose }) => {
  return (
    <Paper>
      <MenuList>
        {menuList.map((item) => (
          <MenuItem key={item.id} onClick={onClose}>
            {item.title}
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};

export default MenuListFC;
