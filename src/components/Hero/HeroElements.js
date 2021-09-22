import styled from "styled-components";
import heroBg from "../../images/flipped-hero-image.jpg";

export const HeroContainer = styled.div`
  background-image: url(${heroBg});
  height: 800px;
  background-size: cover;
  background-attachment: fixed;
  background-position: 80%;
`;

export const HeroTextWrapper = styled.div`
  width: 50%;
  text-align: right;
  font-style: italic;
  padding: 100px 0 0 50px;
  text-shadow: 0 0 16px ${({ theme }) => theme.dark};

  @media screen and (max-width: 760px) {
    width: 100%;
    text-align: center;
    font-style: italic;
    padding: 100px 0 0;
  }
`;

export const HeroHeading = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 3.4rem;
  font-style: italic;
  margin-bottom: 2rem;

  @media screen and (max-width: 760px) {
    font-size: 2.4rem;
    padding: 0 1rem;
  }
`;

export const HeroContent = styled.p`
  color: ${({ theme }) => theme.light};
  font-size: 2rem;

  @media screen and (max-width: 760px) {
    font-size: 1.6rem;
    padding: 0 3rem;
    font-style: normal;
  }
`;
