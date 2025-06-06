// TopNavPopover.jsx
import { useState } from "react";
import { Popover } from "@mui/material";
import TopNavLink from "./TopNavLink";

interface TopNavPopoverProps {
  text: string;
  menuList: {
    type: React.ComponentType<{ menuList: any; onClose: () => void }>;
    data: any;
  };
}

const TopNavPopover = ({ text, menuList }: TopNavPopoverProps) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <div onClick={handleOpen} style={{ cursor: "pointer" }}>
        <TopNavLink text={text} />
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{ sx: { mt: 1, p: 0 } }}
      >
        <menuList.type menuList={menuList.data} onClose={handleClose} />
      </Popover>
    </>
  );
};

export default TopNavPopover;
