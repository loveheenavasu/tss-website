import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ButtonUnderline } from "../buttons"
import { Container, Section } from "../layoutComponents"
import styled from "styled-components"
import SocialMediaFAQ from "../faqs/socialMediaFAQ"
import WebDesignFAQ from "../faqs/webDesignFaq"

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

export default function WebDesign() {
  return (
    <Section className="spacing">
      <Container className="spacing">
        <div className="text-center">
          <h2 className="title upper">
            <span className="italics">your</span>{" "}
            <span className="accent">web designer </span>
            <span className="italics">in sudbury, ON</span>
          </h2>
        </div>
        <WrapperTextLeft>
          <Text className="spacing text-left">
            <div>
              <h2>
                <span className="accent">web design & SEO</span> in sudbury, ON
              </h2>
              <p>
                Does your website need a makeover? Are you a new business
                looking to build from scratch? We got you! We specialize in
                building high-performance custom websites that implement winning
                SEO strategies and we provide ongoing website maintenance, so
                your website is always up-to-date and fully optimized for
                maximum online impact.
              </p>
            </div>
            <div>
              <h2>
                <span className="accent">benefits</span> of{" "}
                <span className="accent">SEO & web design in Sudbury</span>
              </h2>
              <p>
                Struggling to generate traffic and leads? Look no further! We
                can help curate a Sudbury web design and SEO strategy to see
                results! Our web design services will help transform your
                website into a sales machine so you can focus on running your
                business.
              </p>
            </div>
            {/* <div>
              <h2>
                <span className="accent">our sudbury </span> web design{" "}
                <span className="accent">Process</span>
              </h2>
              <p>
               
              </p>
            </div> */}
            <ButtonUnderline to="/contact">contact us &#8594;</ButtonUnderline>
          </Text>
          <StaticImage
            className="img-right"
            src="../../images/web-design-seo-sudbury-dark.png"
            alt="website design services in sudbury, ON"
            objectFit="contain"
          />
        </WrapperTextLeft>
      </Container>
      {/* <WebDesignFAQ /> */}
    </Section>
  )
}
