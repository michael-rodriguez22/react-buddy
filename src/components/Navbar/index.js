import {
  Nav,
  NavContainer,
  NavLogo,
  Icon,
  NavUl,
  NavLink,
  NavButton,
  NavButtonLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">Run Buddy</NavLogo>
          <Icon>
            <FaBars onClick={toggle} />
          </Icon>
          <NavUl>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="Steps">Steps</NavLink>
            </li>
            <li>
              <NavLink to="trainers">Trainers</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
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
