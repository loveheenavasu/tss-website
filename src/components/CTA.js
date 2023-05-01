import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { AnchorInline, ButtonPrimary } from "./buttons"
import { Actions, Container, Flex, Section } from "./layoutComponents"
import CtaImg from "../images/cta-circles.svg"

const Wrapper = styled.div`
  background: url("../../images/cta-background.jpg") rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .cta-img {
    height: 500px;
  }
`

const Text = styled.div`
  color: var(--txt-light);

  .cta-description {
    color: var(--txt-light-secondary);
  }
`

export default function CTA(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Flex>
            <Text className="spacing">
              <div>
                <h3 className="title bold accent italics">
                  Focus on what you do best - let us help with the rest!
                </h3>
              </div>
              <p className="cta-description body--small">{props.description}</p>
              <Actions>
                <ButtonPrimary to="/contact">book online &#8594;</ButtonPrimary>
                <AnchorInline className="bold italics" href="tel: 705-923-1129">
                  <span className="light">Or Call Us:</span> <br />
                  (705) 923-1129
                </AnchorInline>
              </Actions>
            </Text>
            <img
              className="cta-img"
              src={CtaImg}
              alt="call now to get your quote"
            />
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  )
}
