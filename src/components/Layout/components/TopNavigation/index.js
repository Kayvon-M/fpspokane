import React from "react";

import { navigate } from "gatsby";

import { Wrapper, MenuItem, Menu } from "./styles";

export default function TopNavigation() {
  return (
    <Wrapper>
      <Menu>
        <MenuItem onClick={() => navigate("/needHelp")}>Need Help?</MenuItem>
        <MenuItem onClick={() => navigate("/guestPortal")}>
          Guest Portal
        </MenuItem>
        <MenuItem onClick={() => navigate("/archive")}>Blog</MenuItem>
      </Menu>
      <Menu>
        <MenuItem onClick={() => navigate("/contact")}>Contact Us</MenuItem>
        <MenuItem onClick={() => navigate("/staffPortal")}>
          Staff Portal
        </MenuItem>
        <MenuItem onClick={() => navigate("/boardPortal")}>
          Board Portal
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem onClick={() => navigate("/careers")}>Careers</MenuItem>
      </Menu>
    </Wrapper>
  );
}
