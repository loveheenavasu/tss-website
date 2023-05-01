import React from "react"
import styled from "styled-components"
import { FaStar, FaGoogle, FaQuoteLeft } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { StaticImage } from "gatsby-plugin-image"
import { Container, GridAuto, Section } from "./layoutComponents"
import Karen from "../images/karen-circle.png"
import Nicole from "../images/nicole-circle.png"

import David from "../images/clients/david-russell-1.jpg"
import Debbi from "../images/clients/debbi-nicholson-1.jpg"
import DrK from "../images/clients/dr-k.jpg"
import Lisa from "../images/clients/lisa-bray.jpeg"
import Meghan from "../images/clients/meghan-bonhomme-1.jpg"
import Melissa from "../images/clients/melissa-anderson-1.jpg"
import Mike from "../images/clients/mike-pagnutti.jpeg"
import Pierre from "../images/clients/pierre-sodfather.png"

const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 42em) {
    flex-direction: column;
  }
  img {
    border-radius: 1000px;
    max-height: 150px;
    max-width: 150px;
    border: 1px solid var(--clr-accent);
    filter: grayscale(100%);
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

const QuoteStyle = {
  color: "var(--clr-accent-lighter)",
  opacity: "0.8",
  fontSize: "80px",
}

const ReviewText = styled.div`
  padding: 2em;
  border-radius: var(--br);
  box-shadow: var(--shadow-bottom-accent);
`

const Name = styled.div`
  text-align: right;
`

const Review = props => {
  return (
    <Wrapper className="spacing">
      <img src={props.img} alt="social media marketing client review" />
      <ReviewText>
        <FaQuoteLeft style={QuoteStyle} />
        {/* <FlexStars>
          <FaStar style={fontStyle} />
          <FaStar style={fontStyle} />
          <FaStar style={fontStyle} />
          <FaStar style={fontStyle} />
          <FaStar style={fontStyle} />
        </FlexStars> */}
        <p className="italics bold">"{props.review}"</p>
        <Name>
          <p className="bold body--large caps accent">{props.name}</p>
          <p className="body--small caps">{props.company}</p>
        </Name>
      </ReviewText>
    </Wrapper>
  )
}

const AllReviews = () => {
  return (
    <Section>
      <Container className="spacing-lg">
        <Review
          img={Debbi}
          review="The Greater Sudbury Chamber of Commerce has utilized the talents of The Social Soulpreneur for all our social media and marketing needs.  We value their expertise, creativity, and experience, and their ability to meet our, sometimes, tight timelines.  They understand our goals and our market, and always deliver an excellent product.  Outsourcing these needs to The Social Soulpreneur means our staff can focus on other priorities and be assured our social media and marketing are in good hands.”  Debbi M Nicholson, President & CEO, Greater Sudbury Chamber of Commerce"
          name="Debbi M Nicholson"
          company="President & CEO Greater Sudbury Chamber of Commerce"
        />
        <Review
          img={David}
          review="Hailey Hastie from The Social Soulpreneur was an avid Twiggs Sudbury customer when she noticed the potential for growth with our social media. Since The Social Soulpreneur has taken over management of our social media accounts, they have dramatically increased our social following from less than 600 to over 3600 real, engaging followers from the Sudbury area. The Social Soulpreneur’s efforts have resulted in daily user-generated content from Twiggs customers and many successful social collaborations with other local companies. TSS is an energetic, creative, confident, and passionate team whose services are a great asset to any business."
          name="David Russell"
          company="Twiggs Coffee Roasters Sudbury"
        />
        <Review
          img={Melissa}
          review="Hailey and the team at The Social Soulpreneur are a pleasure to work with. They take your ideas and turn them into engaging and professional content. If you are looking to increase your brand awareness online, from social platforms to a complete website overhaul, The Social Soulpreneur is definitely worth checking out! "
          name="Melissa Anderson"
          company="Adventure 365"
        />
        <Review
          img={Mike}
          review="I can’t say enough about my positive experience of working with The Social Soulpreneur.   My business is rather technical but the team at TSS is able to convey our vision and product offerings effectively because they took the time to really learn our values and how the products work.  Their follow-up and communication keep projects moving forward and I always know what stage something is at during development. Working with TSS has allowed me the time freedom to focus on other parts of my company. It’s a relief knowing that our social accounts are in good hands and growing steadily. "
          name="Mike Pagnutti"
          company="Northern Security"
        />
        <Review
          img={Meghan}
          review="TSS IS MY SECRET WEAPON. The team at The Social Soulpreneur are in tune with my vision, and I never have to worry about what content is being posted. It's the best feeling opening up my phone and seeing the notifications of engagement when I haven't even touched a button! Their presence in my business means I can focus on my zone of genius, confidently knowing the team at TSS are taking care of my people and growing my audience.  Their reliability and flexibility are two of my favourite qualities; I always know they are on top of things and that they’re able to go with my creative flow. Often their ideas for growth and engagement are even better than my own! TSS’ commitment and dedication are so appreciated. If you've been worried about letting go of your business-baby and passing the reigns to someone else, The TSS team are the humans I trust. I am from-the-bottom-of-my-heart grateful to have them on my team!"
          name="meghan bonhomme"
          company="the self care queen"
        />
        <Review
          img={DrK}
          review="The Social Soulpreneur’s ability to bring forth my message into the community is truly unmatched! The team at TSS’ willingness to listen to my needs, goals and vision for my brand really sets them apart. Having them on my team releases so much of the constraints I have as a small business owner, which directly allows me to provide the service I love to provide. Their ability to listen to my vision, and to assit me in curating my message is something I am incredibly grateful for. Thank you TSS for bringing my purpose into the 21st century! "
          name="Dr. kamaldeep bansal"
          company="doctor of chiropractic"
        />
        <Review
          img={Lisa}
          review="TSS is a force to be reckoned with! The team TSS team are creative, organized, an definitely passionate about their work. You are in amazing hands when you are working with The Social Soulpreneur. For all your social media needs, TSS can definitely help! They are my go-to!"
          name="Lisa Bray"
          company="Owner Present Simple"
        />
        <Review
          img={Pierre}
          review="My business Sudbury Sod Father has gone from looking basic/amateur to very professional. I am very happy with The Social Soulpreneur! I’m super pumped!"
          name="Pierre Paradis"
          company="Owner Sudbury Sod Father"
        />
      </Container>
    </Section>
  )
}

export default AllReviews
