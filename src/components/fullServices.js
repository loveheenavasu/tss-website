import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import {
  AnchorInline,
  ButtonInline,
  ButtonPrimary,
  ButtonUnderline,
} from "./buttons"
import { Container, GridThree, Section } from "./layoutComponents"

const device = {
  md: "48em",
}

const Text = styled.div`
  max-width: 90ch;
  width: 100%;
`

const Item = styled.div`
  padding: 2em;
  border-radius: var(--br);
  box-shadow: var(--shadow-light-accent);

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
`

const ImgStyle = {
  borderRadius: "1000px",
  height: "200px",
  maxWidth: "200px",
  border: "1px solid var(--clr-accent)",
}

export default function FullServices() {
  return (
    <Section>
      <Container className="spacing">
        <Text className="spacing">
          <div>
            <p className="body--small upper">
              need online exposure for your business?
            </p>
            <h2 className="title caps bold">
              <span className="italics">
                maximize your audience reach with our
              </span>{" "}
              <span className=" accent">digital marketing</span>{" "}
              <span className="italics">Services</span>
            </h2>
          </div>
        </Text>
        <div className="spacing-lg">
          <Item className="spacing">
            <StaticImage
              style={ImgStyle}
              src="../images/logo-brand-development.png"
              alt="logo and brand development sudbury"
            />
            <div>
              <h3 className="upper bold">logo and brand development</h3>
              <ButtonUnderline className="button" to="/services">
                read more &#x2192;
              </ButtonUnderline>
            </div>
          </Item>
          <Item className="spacing">
            <StaticImage
              style={ImgStyle}
              src="../images/social-media-management-sudbury-2.png"
              alt="social media management sudbury"
            />
            <div>
              <h3 className="upper bold">social media management</h3>
              <ButtonUnderline
                className="button"
                to="/services#socialmediamanagement"
              >
                read more &#x2192;
              </ButtonUnderline>
            </div>
          </Item>
          <Item className="spacing">
            <StaticImage
              style={ImgStyle}
              src="../images/web-design-sudbury.png"
              alt="sudbury web design"
            />
            <div>
              <h3 className="upper bold">web design & SEO</h3>
              <ButtonUnderline className="button" to="/services#webdesign">
                read more &#x2192;
              </ButtonUnderline>
            </div>
          </Item>
          <Item className="spacing">
            <StaticImage
              style={ImgStyle}
              src="../images/influencer-management-sudbury.png"
              alt="social media influencer marketing sudbury"
            />
            <div>
              <h3 className="upper bold">influencer management</h3>
              <ButtonUnderline
                className="button"
                to="/services#socialmediainfluencing"
              >
                read more &#x2192;
              </ButtonUnderline>
            </div>
          </Item>
          <Item className="spacing">
            <StaticImage
              style={ImgStyle}
              src="../images/digital-advertising-sudbury.png"
              alt="digital advertising sudbury"
            />
            <div>
              <h3 className="upper bold">digital advertising</h3>
              <ButtonUnderline className="button" to="/services">
                read more &#x2192;
              </ButtonUnderline>
            </div>
          </Item>
          <Item className="spacing">
            <StaticImage
              style={ImgStyle}
              src="../images/public-relations-sudbury.png"
              alt="public relations sudbury"
            />
            <div>
              <h3 className="upper bold">public relations</h3>
              <ButtonUnderline className="button" to="/services">
                read more &#x2192;
              </ButtonUnderline>
            </div>
          </Item>
          <div className="center spacing">
            <h3 className="italics caps">request a quote</h3>
            <p>
              Call us at{" "}
              <AnchorInline href="tel: 705-923-1129">
                (705) 923-1129
              </AnchorInline>{" "}
              or fill out our contact form and a team member will reach out!
            </p>
            <ButtonPrimary to="/contact">contact us</ButtonPrimary>
          </div>
        </div>
      </Container>
    </Section>
  )
}
