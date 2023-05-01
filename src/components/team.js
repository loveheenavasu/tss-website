import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, Flex, Section } from "./layoutComponents"

import Mikayla from "../images/team/mikayla-headshot-circle.jpg"
import Daniela from "../images/team/daniela-valle-headshot-circle.jpg"
import Hailey from "../images/team/hailey-headshot-circle.jpg"
import Karen from "../images/team/karen-hastie-headshot-circle.jpg"
import Tabitha from "../images/team/tabitha-headshot.jpg"
import { AnchorInline, AnchorUnderline, ButtonInline } from "./buttons"

const TeamWrapper = styled.div`
  // background: url("../../images/tss-logo.svg"), rgba(255, 255, 255, 0.97);
  // background-blend-mode: overlay;
  // background-position: center;
  // background-size: contain;
`

const Wrapper = styled.div`
  display: grid;
  place-items: center;

  .headshot-img-mobile,
  .headshot-img-desktop {
    // clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    max-height: 400px;
    max-width: 400px;
    border: 2px solid var(--clr-accent);
    border-radius: 10000px;
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
  background: var(--clr-light);
  padding: 2em;
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
      <Flex>
        <img className="headshot-img-desktop" src={props.img} alt={props.alt} />
        <Text>
          <div>
            <h3 className="headline accent">{props.name}</h3>
            <h4 className=" upper bold">{props.role}</h4>
          </div>
          <p>{props.description}</p>
          <AnchorUnderline href={props.mailto}>{props.email}</AnchorUnderline>
        </Text>
      </Flex>
    </Wrapper>
  )
}

export default function Team() {
  return (
    <TeamWrapper>
      <Section>
        <Container className="spacing-md">
          <div>
            <h2 className="title upper center">
              <span className="italics">meet the </span>
              <span className="accent">TSS</span>{" "}
              <span className="italics"> team</span>
            </h2>
          </div>
          <div className="spacing-lg">
            <TeamMember
              img={Hailey}
              alt="Hailey Hastie Sudbury digital marketer headshot"
              name="Hailey Hastie"
              role="CEO, Chief Marketing Coordinator"
              email="hailey@thesocialsoulpreneur.com"
              mailto="mailto: hailey@thesocialsoulpreneur.com"
              description="Hailey Hastie was born and raised in Sudbury, Ontario by a successful single
-
mom entrepreneur
While most kids were heading to soccer practice or hanging out with their friends after school
–
Hailey
was attending business meetings and events alongside her mom. Growing up in the
business world, Hailey developed a strong passion for business at a young age. Her mom
instilled in her the importance of supporting local, giving back to the community, and hard
work.
These experiences, connections, and opportunities
have given Hailey the confidence to
become the next
-
generation girl boss she is today.
Inspired by her mother, Hailey attended Laurentian University where she obtained a
Bachelor
of Business Administration
degree majoring in Marketing. In 2018, while in her second year of
university Hailey begun The Social Soulpreneur as a
“
side hustle
”
project
-
offering social media
management services to local businesses. In 2019, Hailey was able to incorporate
her company
and make The Social Soulpreneur her full time career. Upon graduating in 2020
-
in the midst of
a global pandemic
-
Hailey hired her first employee of The Social Soulpreneur and opened the
doors to their current office Studio space
in Sudbury
.
Since then
,
The Social Soulpreneur has
developed into a full
-
service Marketing Studio
and
Social Media Agency
serving clients across
Canada
.
Hailey is proud to staff a
fully female
team of 3 full time employees. In 2021 Hailey was
awarded the Bell Business Excellence Young Entrepreneur of the Year award.
Hailey’s greatest
accomplishment in life came in
June of 2022
giving birth alongside her husband to their
daughter, Indiana."
            />

            <TeamMember
              img={Daniela}
              alt="Daniela Valle - Sudbury Marketing Strategist, Sudbury Digital Ad Analyst"
              name="Daniela Valle"
              email="daniela@thesocialsoulpreneur.com"
              mailto="mailto: daniela@thesocialsoulpreneur.com"
              role="Marketing Strategist, Digital Ad Analyst"
              description="Daniela has always shown interest in art, pop culture and business. While in high school, she took as many
              business and art courses available and started to develop a passion for marketing. Daniela
              found a way to
              combine her creative abilities with her love for business and knew that specializing in marketing was a perfect fit
              for her.
              In 2017, Daniela attended Laurentian University. Here, she earned a Bachelor's degree in Business Administration
              with a specialization in Marketing and a minor in Communication Studies. When Daniela met
              Hailey
              in her
              marketing class at Laurentian, they instantly became friends and knew they would work so well together. With
              the same passions in mind, Daniela and
              Hailey
              continue to help each other thrive in business, and in 2020 she
              joined The Social Soulpreneur. Her favourite thing about working in marketing and social media is the diversity.
              Every client has a different brand, vision, and goal
              –
              allowing her job to be
              just as unique!
              Since joining The Social Soulpreneur, Daniela has expanded her skill set and grown as a marketer. Not only does
              she create engaging content for clients, but she also develops strategic marketing and brand work, manages and
              creates digital ads, and more!
              She is very excited to keep helping clients grow their businesses and reach their marketing goals!"
            />
            <TeamMember
              img={Mikayla}
              alt="Mikayla - Sudbury Social Media Manager"
              name="Mikayla Desrosiers"
              role="Social Media Manager"
              mailto="mailto: mikayla@thesocialsoulpreneur.com"
              email="mikayla@thesocialsoulpreneur.com"
              description="The first time Mikayla heard about The Social Soulpreneur,
              she was in her first year at Cambrian
              College for Business Administration. After a deep dive into their social media pages, she quickly
              was intrigued by their motto, their vision, and the company culture. Seeing as this was the first
              time she heard about
              working in social media as a career, she knew she had to test the waters
              out to see if this was the right fit for her. This led to Mikayla applying at TSS for her co-op.
              During this time, she learnt a considerable amount about marketing, social media, and
              how
              truly amazing The Social Soulpreneur team is.
              Considering that Mikayla is someone who craves creativity in almost anything that she does, as
              well as someone who loves to help others, this career choice is a dream for her. And she
              couldn’t be more than
              kful for how this opportunity worked out. Mikayla went from a confused
              college student to a full
              -
              time employed social media assistant
              -
              major glow up.
              As a member of Team TSS, Mikayla is always working to further her skills and knowledge, and of
              course
              coming up with new and creative ways to continue to create meaningful content for
              clients."
            />
            <TeamMember
              img={Tabitha}
              alt="Tabitha - Sudbury photographer for social media"
              name="Tabitha Rees"
              role="Agency Photographer"
              description="Tabitha Rees is an accomplished photographer based in Northern Ontario. With a passion for capturing authentic moments and emotions, she has developed a unique style that combines fine art and documentary photography. Tabitha specializes in making people feel comfortable behind the lens; with a keen eye for detail and a talent for storytelling, she creates timeless images that evoke the true essence of her subjects. In addition to taking pride in her work with families and businesses, Tabitha’s highlight of her career includes being featured in national campaigns with Levi’s Canada and lululemon. Through her artistry and passion Tabitha aims to inspire others to see the beauty in everyday life. Tabitha has been an avid photographer for 25 years and is well versed in film and digital photography. Between 2004-2006, Tabitha attended photography classes while taking her undergrad in Public Relations. Since then, Tabitha has taken workshops with award winning and renowned photographers Jenna and Aimee Hobbs, Kirsten Lewis Bethmann and Annie Leibovitz."
              mailto=""
              email=""
            />
            <TeamMember
              img={Karen}
              alt="Karen - Sudbury brand manager"
              name="Karen Hastie"
              role="Branding & Business Development"
              mailto="mailto: karen@thesocialsoulpreneur.com"
              email="karen@thesocialsoulpreneur.com"
              description="My 32 years' experience in owning and operating several different businesses along with my passion for business analysis, branding and selling, is what inspired me to want to help small to mid-size businesses. 




              I offer a much-needed external point of view to various internal business challenges.  As an external project manager I can help your business focus on the development process of individual projects, or overall company operations, by developing a business strategy for your company to improve performance and revenue.
              
              
              
              
              I can successfully communicate with your target customers and identify their needs; I am able to make sure your team better understands better your company's current brand, or will work collaboratively with you to rebrand your company  using  my Blow  Your Mind  Branding Strategies to ensure your brand appeals to your target audience.
              
              
              
              
              My 3 decades of selling has allowed me to develop a process called the “Serial Seller”.These unique sales approaches will not only make your salesforce stronger, but will show you how your current sales staff and non-sales staff,  service providers, professionals, administrators, and customer service representatives, might be the real reason your company's sales are not growing."
            />
          </div>
        </Container>
      </Section>
    </TeamWrapper>
  )
}
