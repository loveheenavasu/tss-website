import React from "react"
import BannerAbout from "../components/banners/bannerAbout"
import Layout from "../components/layout"
import { Container, Section } from "../components/layoutComponents"
import FormContact from "../components/forms/formContact"
import Bio from "../components/bio"
import Guarantee from "../components/guarantee"
import FeaturedReviews from "../components/featuredReviews"
import CTA from "../components/CTA"
import SEO from "../components/seo"
import BannerImg from "../images/banner-about-circles.svg"
import { ButtonPrimary } from "../components/buttons"
import Team from "../components/team"
import FullServices from "../components/fullServices"
import Clients from "../components/clients"

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Us - Meet Your New Marketing Team"
        description="The Social Soulpreneur is a full-service marketing studio and social media agency specializing in content curation, brand development, digital advertising, website development, and social media management."
      />
      <BannerAbout
        to1="/"
        link1="Home"
        to2="/about"
        link2="About"
        title="Your new marketing team"
        description="The Social Soulpreneur is a full-service marketing studio and social media agency specializing in content curation, brand development, digital advertising, website development, and social media management."
        img={BannerImg}
      />
      <Team />
      <Section>
        <Container className="spacing text-center">
          <div>
            <p className="upper body--small">
              Think of us as a member of your marketing team
            </p>
            <h1 className="upper">
              <span className="italics">why hire </span>
              <span className="accent">TSS</span>{" "}
              <span className="italics">as your in-house marketing team?</span>
            </h1>
          </div>
          <div className="text-center spacing">
            <p>
              The Social Soulpreneur is a team of expert social media managers
              and marketing and branding gurus who know how to effectively and
              efficiently manage your audience in a timely manner – with no
              programming and no automation. Just real, organic growth.
            </p>
            <p>
              We are a full-service marketing and social media management
              agency. We take care of all the daily tasks that go into running
              and managing an effective social media account and make social
              media fun again! We work with a variety of clients in a wide range
              of industries.
            </p>
            <p>
              From start-ups to international brands, to local businesses to
              franchises – we’ve got the tools to effectively work with them
              all. We’ve helped clients in industries like mining, retail,
              finance, food, healthcare, and everywhere in between leverage the
              power of social media to connect with their audience and
              communicate their message.
            </p>
          </div>
          <ButtonPrimary to="/contact">get your quote &#8594;</ButtonPrimary>
        </Container>
      </Section>
      <Clients />
      <CTA
        subtitle=""
        // title="Start connecting with your audience."
        title="Stop going it alone in your marketing efforts"
        description="Get an entire team of marketing experts working with you to connect you with your target audience and drive results. Whether you're looking to grow your brand, increase engagement, or boost conversions, we've got you covered. Click the link or give us a call today to schedule a free consultation and see how our team can help you achieve your goals."
      />
      {/* <FullServices /> */}
      <FeaturedReviews />

      <FormContact title="Discover how we can help your business grow" />
    </Layout>
  )
}
