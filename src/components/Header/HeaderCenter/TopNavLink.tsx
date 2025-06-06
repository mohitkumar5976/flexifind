import React from "react";
import { Typography, type TypographyProps } from "@mui/material";

interface TopNavLinkProps extends TypographyProps {
  text: string;
}

const TopNavLink = React.forwardRef<HTMLSpanElement, TopNavLinkProps>(
  ({ text, ...props }, ref) => (
    <Typography
      ref={ref}
      fontSize={15}
      fontWeight="semibold"
      sx={{ fontFamily: "Helvetica, sans-serif" }}
      {...props}
    >
      {text}
    </Typography>
  )
);

TopNavLink.displayName = "TopNavLink"; // For dev tools and warnings

export default TopNavLink;
