import {
  HeroContainer,
  HeroTextWrapper,
  HeroHeading,
  HeroContent,
} from "./HeroElements";

const Hero = () => {
  return (
    <>
      <HeroContainer id="home">
        <HeroTextWrapper>
          <HeroHeading>What keeps you going?</HeroHeading>
          <HeroContent>
            We are here to help you lace up your shoes and chase what is
            important to you. Whatever your goals are, our job is to keep you
            running towards them.
          </HeroContent>
        </HeroTextWrapper>
      </HeroContainer>
      <div style={{ height: 1000 }}></div>;
    </>
  );
};

export default Hero;
