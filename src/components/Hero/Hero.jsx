import React from "react";
import styled from "styled-components";

const Hero = () => {
  const src = "/images/hero-img.jpg";
  return (
    <Wrapper>
      <HeroImage
        src={src}
        srcSet={`
            ${src.replace(".jpg", ".avif")}, 
            ${src.replace(".jpg", "@2x.jpeg")},
            ${src.replace(".jpg", "@2x.avif")},
            ${src.replace(".jpg", "@3x.jpg")},
            ${src.replace(".jpg", "@3x.avif")}`}
        alt="An example of the photos distributed on the site (A cat staring at you_."
      />
      <Swoop src="/swoop.svg" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
