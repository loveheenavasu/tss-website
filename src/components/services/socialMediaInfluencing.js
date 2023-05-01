import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ButtonUnderline } from "../buttons"
import { Container, Section } from "../layoutComponents"
import styled from "styled-components"
import SocialMediaFAQ from "../faqs/socialMediaFAQ"
import InfluencerFAQ from "../faqs/influencerFaq"

const Wrapper = styled.div`
  background: var(--clr-light-secondary);
`

const WrapperTextRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 4em 1fr;

  @media screen and (max-width: 40em) {
    display: flex;
    flex-direction: column-reverse;
  }

  .img-right {
    border-radius: var(--br);
    grid-column: 1 / span 2;
    grid-row: 1 / -1;

    z-index: 1;
  }
`

const Text = styled.div`
  grid-column: 2 / -1;
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

export default function SocialMediaInfluencing() {
  return (
    <Wrapper>
      <Section className="spacing">
        <Container className="spacing">
          <div className="text-center">
            <h2 className="title upper">
              <span className="italics">your</span>{" "}
              <span className="accent">social media </span>
              <span className="italics">influencer</span>
            </h2>
          </div>
          <WrapperTextRight>
            <Text className="spacing text-left">
              <div>
                <h2>
                  <span className="accent">social media influencing</span> in
                  sudbury, ON
                </h2>
                <p>
                  Influencer marketing is a type of social media marketing that
                  uses endorsements and product mentions from
                  influencers–individuals who have a dedicated social following
                  and are viewed as experts within their niche. By incorporating
                  influencer marketing into your business’s marketing strategy
                  is an effective way to humanize your brand and expose it to a
                  greater niche of potential buyers.
                </p>
              </div>
              <div>
                <h2>
                  <span className="accent">benefits</span> of{" "}
                  <span className="accent">
                    sudbury social media influencing
                  </span>
                </h2>
                <p>
                  Studies have shown that consumers want authenticity from the
                  brands they interact with. A recent stat shows that 90% of
                  consumers trust peer recommendations while only 33% trust ads.
                  Influencer marketing has been shown to deliver an 11X higher
                  ROI than other digital media. In comparison to paid media,
                  brands typically earn $2 for every $1 spent on paid
                  advertisements compared to $12 per every $1 spent on
                  influencer marketing.
                </p>
              </div>
              <ButtonUnderline to="/contact">
                contact us &#8594;
              </ButtonUnderline>
            </Text>
            <StaticImage
              className="img-right"
              src="../../images/influencer-management-sudbury-dark.png"
              alt="social media influencer marketing services in sudbury, ON"
              objectFit="contain"
            />
          </WrapperTextRight>
        </Container>
        {/* <InfluencerFAQ /> */}
      </Section>
    </Wrapper>
  )
}
