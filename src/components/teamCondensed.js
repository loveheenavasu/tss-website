import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, GridAuto, Section } from "./layoutComponents"

import Mikayla from "../images/team/mikayla-headshot-circle.jpg"
import Daniela from "../images/team/daniela-valle-headshot-circle.jpg"
import Hailey from "../images/team/hailey-headshot-circle.jpg"
import Karen from "../images/team/karen-hastie-headshot-circle.jpg"
import { AnchorInline, ButtonInline } from "./buttons"

const device = {
  md: "48em",
}

const TeamWrapper = styled.div`
  background: url("../../images/tss-logo.svg"), rgba(255, 255, 255, 0.97);
  background-blend-mode: overlay;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  img {
    /* width: 100%; */
  }
  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

const Wrapper = styled.div`
  display: grid;
  place-items: center;

  .headshot-img-mobile,
  .headshot-img-desktop {
    // clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    border: 2px solid var(--clr-accent);
    border-radius: 100000px;
    height: 300px;
    box-shadow: var(--shadow-light-accent);
    object-fit: cover;
    object-position: top;
  }
  // .headshot-img-mobile {
  //   display: none;
  //   @media screen and (max-width: 48em) {
  //     display: block;
  //   }
  // }
  // .headshot-img-desktop {
  //   @media screen and (max-width: 48em) {
  //     display: none;

  //     .headshot-img-mobile {
  //       display: block;
  //     }
  //   }
  // }
`

const Text = styled.div`
  text-align: center;
  h4 {
    color: var(--txt-dark-secondary);
    margin-top: 0;
  }

  p {
    max-width: 70ch;
    width: 100%;
  }

  @media screen and (max-width: 48em) {
    text-align: center;
  }
`

const TeamMember = props => {
  return (
    <Wrapper>
      <Flex className="spacing">
        <img className="headshot-img-desktop" src={props.img} alt={props.alt} />
        <Text>
          <div>
            <h3 className="headline accent">{props.name}</h3>
            <h4 className=" upper bold">{props.role}</h4>
          </div>
        </Text>
      </Flex>
    </Wrapper>
  )
}

export default function TeamCondensed() {
  return (
    <TeamWrapper>
      <Section>
        <Container className="spacing-md">
          <div>
            <h2 className="title upper center">
              <span className="italics">meet the </span>
              <span className="accent">TSS</span>{" "}
              <span className="italics">marketing team</span>
            </h2>
          </div>
          <GridAuto>
            <TeamMember
              img={Hailey}
              alt="Hailey Hastie Sudbury digital marketer headshot"
              name="Hailey Hastie"
              role="CEO, Chief Marketing Coordinator"
            />
            <TeamMember
              img={Daniela}
              alt="Daniela Valle - Sudbury Marketing Strategist, Sudbury Digital Ad Analyst"
              name="Daniela Valle"
              role="Marketing Strategist, Digital Ad Analyst"
            />
            <TeamMember
              img={Mikayla}
              alt="Mikayla - Sudbury Social Media Manager"
              name="Mikayla Desrosiers"
              role="Social Media Manager"
            />
            <TeamMember
              img={Karen}
              alt="Karen - Branding & Business Development"
              name="Karen Hastie"
              role="Branding & Business Development"
              description=""
            />
          </GridAuto>
        </Container>
      </Section>
    </TeamWrapper>
  )
}
