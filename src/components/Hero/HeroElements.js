import styled from "styled-components";
import heroBg from "../../images/flipped-hero-image.jpg";

export const HeroContainer = styled.div`
  background-image: url(${heroBg});
  height: 800px;
  background-size: cover;
  background-attachment: fixed;
  background-position: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
`;
