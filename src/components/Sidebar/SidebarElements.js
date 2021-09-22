import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export const SidebarContainer = styled.aside`
  background: ${({ theme }) => theme.dark};
  border: 3px solid ${({ theme }) => theme.secondary};
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  top: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
`;

export const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 69px);
`;

export const SidebarLink = styled(ScrollLink)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.3s ease-in-out;
  color: ${({ theme }) => theme.light};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const SidebarButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarButtonLink = styled(RouterLink)`
  cursor: pointer;
  border-radius: 50px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  white-space: nowrap;
  padding: 1rem 4rem;
  font-size: 1.5rem;
  outline: none;
  border: none;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.light};
  }
`;
