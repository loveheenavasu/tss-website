import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, GridAuto, Section } from "./layoutComponents"

const Wrapper = styled.div`
  background: url("../../images/clients-bg-pink.jpg"), rgba(0, 0, 0, 0.3);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-light);
  display: grid;
  place-items: center;
  min-height: 600px;
`

const Text = styled.div`
  // margin-top: auto;
  // margin-bottom: auto;
`

const ImgStyle = {}

export default function Clients() {
  return (
    <div className="spacing-lg">
      <Wrapper>
        <Section>
          <Container className="spacing center">
            <Text>
              <p className="body--large caps">trusted by</p>
              <h2 className="title upper bold">200+ businesses</h2>
              <p>
                Amazing things happen when you choose the right marketing
                company
              </p>
            </Text>
          </Container>
        </Section>
      </Wrapper>
      {/* <Container className="center spacing">
        <h3 className="body--large caps bold">
          We've also had the pleasure of working closely with:
        </h3>
        <GridAuto>
          <StaticImage
            style={ImgStyle}
            src="../images/lululemon-marketing-client.svg"
            alt="sudbury social media marketing client"
          />
          <StaticImage
            style={ImgStyle}
            src="../images/levi-marketing-client.svg"
            alt="sudbury social media marketing client"
          />
          <StaticImage
            style={ImgStyle}
            src="../images/beyond-wireless-marketing-client.svg"
            alt="sudbury social media marketing client"
          />
        </GridAuto>
      </Container> */}
    </div>
  )
}
