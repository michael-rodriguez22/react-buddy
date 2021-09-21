import {
  Nav,
  NavContainer,
  NavLogo,
  Icon,
  NavUl,
  NavLi,
  NavLink,
  NavButton,
  NavButtonLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">Run Buddy</NavLogo>
          <Icon>
            <FaBars />
          </Icon>
          <NavUl>
            <NavLi>
              <NavLink to="about">About</NavLink>
            </NavLi>
            <NavLi>
              <NavLink to="Steps">Steps</NavLink>
            </NavLi>
            <NavLi>
              <NavLink to="trainers">Trainers</NavLink>
            </NavLi>
            <NavLi>
              <NavLink to="contact">Contact</NavLink>
            </NavLi>
          </NavUl>
          <NavButton>
            <NavButtonLink to="/signup">Sign Up!</NavButtonLink>
          </NavButton>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
