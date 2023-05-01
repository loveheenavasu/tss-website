import React from "react"
import styled from "styled-components"
import { FaStar, FaGoogle } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { StaticImage } from "gatsby-plugin-image"
import { Container, GridAuto, Section } from "./layoutComponents"

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 6em auto 6em;
`

const Content = styled.div`
  h3 {
    color: var(--txt-light);
  }
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;
`

const Bg = styled.div`
  background: var(--clr-accent);
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
`

const Wrapper = styled.div`
  background: var(--clr-dark-secondary);
  color: var(--txt-light);
  padding: 2em;
  border-radius: var(--br);
  height: 100%;
  a {
    text-decoration: underline;
  }
`

const FlexStars = styled.div`
  display: flex;
  & > * + * {
    margin-left: 5px;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  & * + * {
    margin-left: 2px;
  }
`

const fontStyle = {
  color: "gold",
}

const FlexTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 36em) {
    flex-direction: column;
  }

  & > * + * {
    margin-left: 10px;
  }
`

const Review = props => {
  return (
    <Wrapper className="spacing">
      <FlexStars>
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
      </FlexStars>
      <p className="italics bold">"{props.review}"</p>
      <a
        href="https://www.google.com/maps/place/The+Social+Soulpreneur/@46.584407,-81.079126,9z/data=!4m8!3m7!1s0x4d2f01e6445c1b3d:0x5eafb6f47374b853!8m2!3d46.584407!4d-81.079126!9m1!1b1!16s%2Fg%2F11hzlz7p_l"
        target="_blank"
        className="accent"
      >
        Read more Google reviews &#8594;
      </a>
      <Flex>
        <FcGoogle size={35} />
        <div>
          <p className="caps">{props.name}</p>
        </div>
      </Flex>
    </Wrapper>
  )
}

const FeaturedReviews = () => {
  return (
    <Section>
      <GridWrapper>
        <Bg />
        <Content className="spacing">
          <Container className="spacing">
            <FlexTitle>
              <FlexStars>
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
              </FlexStars>
              <h3 className="title bold caps italics center">
                our clients love us!
              </h3>
              <FlexStars>
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
                <FaStar style={fontStyle} />
              </FlexStars>
            </FlexTitle>
            <GridAuto>
              <Review
                name="Lisa Bray"
                review="Hailey is a force to be reckoned with! She is creative, organized and definitely passionate about her work. You are in amazing hands when you are working with her. For all of your social media needs, The Social Soulpreneur can definitely help. She is my go to!"
              />
              <Review
                name="Glen Paquette"
                review="The Social Soulpreneur has been absolutely amazing. They have managed the social media for one of my side projects, which promotes online events, and have knocked it out of the park. If you need serious social media management for your business - these are the experts you want. Hailey is a creative marketing genius and provides tons of value - above and beyond what she charges. Seriously, the team at the Social Soulpreneur are true pros - forget the rest... they are the BEST!"
              />
              <Review
                name="Pierre Paradis"
                review="My business Sudbury Sod Father has gone from looking basic/amateur to very professional. I am very happy with Daniella. Im super pumped!!"
              />
            </GridAuto>
          </Container>
        </Content>
      </GridWrapper>
    </Section>
  )
}

export default FeaturedReviews
