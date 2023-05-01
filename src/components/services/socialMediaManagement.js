import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ButtonUnderline } from "../buttons"
import { Container, Section } from "../layoutComponents"
import styled from "styled-components"
import SocialMediaFAQ from "../faqs/socialMediaFAQ"

const WrapperTextLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr 4em 1fr;

  @media screen and (max-width: 40em) {
    display: flex;
    flex-direction: column-reverse;
  }

  .img-right {
    border-radius: var(--br);
    grid-column: 2 / -1;
    grid-row: 1 / -1;
    z-index: 1;
  }
`

const Text = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / -1;
  z-index: 1000;
  background: #f8f8f8;
  padding: 2em;
  border: 1px solid var(--clr-accent);
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  align-self: center;

  h2 {
    font-size: var(--fs-b);
    line-height: 1.1;
    text-transform: capitalize;
  }
`

export default function SocialMediaManagement() {
  return (
    <Section className="spacing">
      <Container className="spacing">
        <div className="text-center">
          <h2 className="title upper">
            <span className="italics">your</span>{" "}
            <span className="accent">social media </span>
            <span className="italics">manager</span>
          </h2>
        </div>
        <WrapperTextLeft>
          <Text className="spacing text-left">
            <div>
              <h2>
                <span className="accent">social media marketing</span> in
                sudbury, ON
              </h2>
              <p>
                We work with our clients to develop and execute a strategic
                social media plan based on market research and your company’s
                unique goals and objectives. Our mission is to help business
                owners effectively market their businesses and promote their
                brands through social media while engaging with their community
                in a humanized way.
              </p>
            </div>
            <div>
              <h2>
                <span className="accent">benefits</span> of{" "}
                <span className="accent">sudbury social media marketing</span>
              </h2>
              <p>
                Grab interest through custom content that makes an impact and
                communicates your brand and engage with your audience and
                community in an authentic and effective way. We develop
                on-brand, purposeful and relatable content. The Social
                Soulpreneur is a team of expert social media managers and
                marketing and branding gurus who know how to effectively and
                efficiently manage your audience in a timely manner – with no
                programming and no automation. Just real, organic growth.
              </p>
            </div>
            <div>
              <h2>
                <span className="accent">our unique 2-phase system </span> for
                social media <span className="accent">management</span>
              </h2>
              <p>
                <span className="bold  upper">Phase 1: The set up</span> <br />{" "}
                We revamp, re-brand, update and enhance your social media
                platforms to ensure they are meeting all your business needs,
                taking advantage of all the various features each unique
                platform has to offer, provide consistent branding visuals and
                copy across each platform and develop a strategic content plan.
              </p>
              <p>
                <span className="bold  upper">Phase 2: monthly management</span>{" "}
                <br /> We become your social media secret weapon. We create a
                custom management package based on your business or industry and
                take care of all your social media needs and daily tasks. From
                content creation to community engagement – we’ve got you
                covered.
              </p>
            </div>
            <ButtonUnderline to="/contact">contact us &#8594;</ButtonUnderline>
          </Text>
          <StaticImage
            className="img-right"
            src="../../images/social-media-management-sudbury-2-dark.png"
            alt="social media management services in sudbury, ON"
            objectFit="contain"
          />
        </WrapperTextLeft>
      </Container>
      {/* <SocialMediaFAQ /> */}
    </Section>
  )
}
