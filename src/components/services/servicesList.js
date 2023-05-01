import React from "react"
import { Container, Flex, Section } from "../layoutComponents"
import { BsLightningFill } from "react-icons/bs"
import styled from "styled-components"

const device = {
  md: "48em",
}

const FlexList = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
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

  ul {
    li {
      text-transform: uppercase;
      list-style-type: none;
    }
  }
`

const IconStyle = {
  color: "var(--clr-accent)",
  fontSize: "18px",
}

export default function ServicesList() {
  return (
    <Section>
      <Container className="spacing">
        <div className="text-center spacing">
          <div>
            <p className="upper body--small">
              full-service sudbury digital marketing experts
            </p>
            <h2 className="upper">
              <span className="italics">a glimpse of what can we do for </span>
              <span className="accent">you</span>
            </h2>
          </div>
          <p>
            From start-ups to international brands, to local businesses to
            franchises – we’ve got the tools to effectively work with them all.
            We’ve helped clients in industries like mining, retail, finance,
            food, healthcare, and everywhere in between leverage the power of
            social media to connect with their audience and communicate their
            message.
          </p>
        </div>
        <FlexList>
          <ul>
            <li>
              <BsLightningFill style={IconStyle} />
              social media <span className="accent">management</span>
            </li>
            <li>
              <BsLightningFill style={IconStyle} />
              content <span className="accent">creation</span>
            </li>
            <li>
              <BsLightningFill style={IconStyle} />
              website design & <span className="accent">development</span>
            </li>
          </ul>
          <ul>
            <li>
              <BsLightningFill style={IconStyle} />
              influencer <span className="accent">marketing</span>
            </li>
            <li>
              <BsLightningFill style={IconStyle} />
              digital <span className="accent">advertising</span>
            </li>
            <li>
              <BsLightningFill style={IconStyle} />
              print <span className="accent">media</span>
            </li>
          </ul>
          <ul>
            <li>
              <BsLightningFill style={IconStyle} />
              Photography & <span className="accent">Videography</span>
            </li>
            <li>
              <BsLightningFill style={IconStyle} />
              email <span className="accent">marketing</span>
            </li>
            <li>
              <BsLightningFill style={IconStyle} />
              mobile app <span className="accent">development</span>
            </li>
          </ul>
        </FlexList>
      </Container>
    </Section>
  )
}
