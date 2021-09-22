import { useState } from "react";
import {
  SidebarContainer,
  Icon,
  SidebarMenu,
  SidebarLink,
  SidebarButton,
  SidebarButtonLink,
} from "./SidebarElements";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <Icon>
          <FaTimes onClick={() => toggle(!isOpen)} />
        </Icon>
        <div>
          <SidebarMenu>
            <SidebarLink to="about">About</SidebarLink>
            <SidebarLink to="Steps">Steps</SidebarLink>
            <SidebarLink to="trainers">Trainers</SidebarLink>
            <SidebarLink to="contact">Contact</SidebarLink>
          </SidebarMenu>
          <SidebarButton>
            <SidebarButtonLink to="/signup">Sign Up!</SidebarButtonLink>
          </SidebarButton>
        </div>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
