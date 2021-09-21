import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.primary};
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 1s all ease;
  }
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
  color: ${({ theme }) => theme.secondary};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-weight: bold;
  text-decoration: none;
`;

export const Icon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: ${({ theme }) => theme.secondary};
  }
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLi = styled.li`
  height: 80px;
`;

export const NavLink = styled(ScrollLink)`
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.secondary};
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
  background: ${({ theme }) => theme.tertiary};
  color: ${({ theme }) => theme.light};
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
  }
`;
