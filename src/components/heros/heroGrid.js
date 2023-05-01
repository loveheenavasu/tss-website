import React from "react"
import styled from "styled-components"
import { Container } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"
import { StaticImage } from "gatsby-plugin-image"
import HeroImg from "../../images/hero-circles-tss-1.svg"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
`

const Bg = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / span 2;
  background: url("../../images/tss-hero-1.jpg") rgba(0, 0, 0, 0.5);
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1000;
`

const Top = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  color: var(--txt-light);
  padding: 4em 0 4em 0;
  justify-self: center;
  text-align: center;

  h2 {
    padding-top: 4em;
  }

  h2,
  p {
  }

  p {
    color: var(--txt-light-secondary);
  }
`

const Bottom = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 1;
  justify-self: center;
`

// banner with only 2 links in the breadcrumb
export default function HeroGrid(props) {
  return (
    <Wrapper>
      <Bg />
      <Top>
        <Container className="spacing">
          <h2 className="title caps bold">
            <span className="italics">
              your <span className="italics accent">new</span> marketing studio
            </span>
          </h2>
          <p className="bold">
            Unlock the full potential of your social media presence with our
            unique in-house services. Our focus on custom strategies and
            personalized attention will allow you to confidently leave the
            social media marketing to us, while you continue to shine in your
            own area of expertise.
          </p>
          <ButtonPrimary to="/contact">let's chat &#8594;</ButtonPrimary>
        </Container>
      </Top>
      <Bottom>
        <Container>
          <img src={HeroImg} alt="tss" />
        </Container>
      </Bottom>
    </Wrapper>
  )
}
