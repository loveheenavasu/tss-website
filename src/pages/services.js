import React from "react"
import Banner from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import { Container, Flex, Section } from "../components/layoutComponents"
import FormContact from "../components/forms/formContact"
import FullServices from "../components/fullServices"
import SEO from "../components/seo"
import BannerImg from "../images/services-circles.svg"
import Background from "../images/services-banner.jpg"
import { StaticImage } from "gatsby-plugin-image"
import { ButtonPrimary } from "../components/buttons"
import Clients from "../components/clients"
import ServicesList from "../components/services/servicesList"
import CTA from "../components/CTA"
import SocialMediaManagement from "../components/services/socialMediaManagement"
import SocialMediaInfluencing from "../components/services/socialMediaInfluencing"
import WebDesign from "../components/services/webDesign"
import TeamCondensed from "../components/teamCondensed"
import styled from "styled-components"

const TopText = styled.div`
  width: 85%;
  margin: 0 4rem;
`

export default function Services() {
  return (
    <Layout>
      <SEO
        title="In-house Social Media Marketing Agency Sudbury, ON - TSS"
        description="Our mission as your Sudbury digital marketing team is to help you more effectively market your business and promote your brand through social media while engaging with your community in a humanized way."
      />
      <Banner
        to1="/"
        link1="Home"
        to2="/services"
        link2="Services"
        title="Your In-House Marketing and Social Media Agency"
        description="Our mission as your Sudbury digital marketing team is to help you more effectively market your business and promote your brand through social media while engaging with your community in a humanized way."
        img={BannerImg}
        background={Background}
      />
      <Section>
        <Flex className="spacing">
          <StaticImage
            src="../images/services-1.jpg"
            alt=""
            className="stretch"
          />
          <TopText className="spacing">
            <div>
              <h1 className="upper italics">Meet Your <span className="accent">New Marketing Team</span>{" "}
              </h1>
            </div>
            <div className="spacing">
              <p>
                The Social Soulpreneur is a full-service marketing studio and
                social media agency specializing in content curation, brand
                development, digital advertising, website development, and
                social media management. We help develop your brand's visual
                identity and connect it with your audience in an authentic and
                engaging way.
              </p>
              <p>
                We help entrepreneurs and professionals bring their brand vision
                to life while taking care of the daily tasks of managing an
                effective online presence - giving them the time they need to
                focus on what they do best. We bring authenticity and connection
                to businesses and corporations through social media engagement
                and brand development to enhance their communications and brand
                image with their target audience.
              </p>
              <p>
                When you choose to work with The Social Soulpreneur, you get
                access to our entire team of expert content creators,
                photographers, videographers, developers, brand strategists and
                marketers to help put your brand in front of your target
                audience. From start-ups and franchises to local businesses and
                international companies, our team has the skills to effectively
                market your business. Since 2019 The Social Soulpreneur has
                worked with hundreds of brands in industries like mining,
                retail, finance, healthcare, telecommunications, construction,
                automotive, non-profit, and everywhere in between.
              </p>
            </div>
            <ButtonPrimary to="/contact">let's chat &#8594;</ButtonPrimary>
          </TopText>
        </Flex>
      </Section>

      <ServicesList />
      <SocialMediaManagement />
      <SocialMediaInfluencing />
      <WebDesign />

      <CTA
        subtitle="\"
        title="get help from a team of digital marketing experts"
        description="We work with our clients to develop and execute a strategic social media plan based on market research and your company’s unique goals and objectives."
      />
      <Clients />
      <TeamCondensed />
      <FormContact title="easily request a service using the form below" />
    </Layout>
  )
}
