import styled from "styled-components";
import heroBg from "../../images/flipped-hero-image.jpg";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const Nav = styled.nav`
  background-image: url(${heroBg});
  background-size: cover;
  background-attachment: fixed;
  background-position: 80%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  font-weight: bold;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1600px;
`;

export const NavLogo = styled(RouterLink)`
  color: ${({ theme }) => theme.primary};
  text-shadow: 0 0 8px ${({ theme }) => theme.dark};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 20px;
  text-decoration: none;
`;

export const Icon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.primary};
  }
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 1rem;
  justify-content: space-between;
  min-width: 44%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(ScrollLink)`
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.6rem;
  height: 69px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 4px solid ${({ theme }) => theme.primary};
  }
`;

export const NavButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavButtonLink = styled(RouterLink)`
  cursor: pointer;
  border-radius: 50px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  border-radius: 50px;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 1.3rem;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.light};
  }
`;
