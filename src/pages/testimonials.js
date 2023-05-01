import React from "react"
import Layout from "../components/layout"
import Bio from "../components/bio"
import Guarantee from "../components/guarantee"
import FullServices from "../components/fullServices"
import AllReviews from "../components/allReviews"
import FormContact from "../components/forms/formContact"
import FeaturedGallery from "../components/featuredGallery"
import SEO from "../components/seo"
import CTA from "../components/CTA"
import HeroGrid from "../components/heros/heroGrid"
import { Container, Section } from "../components/layoutComponents"
import { ButtonPrimary } from "../components/buttons"
import Clients from "../components/clients"
import BannerImg from "../images/testimonials-banner-circles.svg"
import Background from "../images/testimonials-banner.jpg"
import Banner from "../components/banners/bannerPrimary"

export default function Testimonials() {
  return (
    <Layout>
      <SEO
        title="Testimonials - The Social Soulpreneur"
        description="From start-ups to international brands, to local businesses to franchises – we’ve got the tools and expertise to effectively work with them all. Read our featured testimonials below to see why our clients love working with us."
      />
      <Banner
        to1="/"
        link1="Home"
        to2="/testimonials"
        link2="Testimonials"
        title="our clients love us!"
        description="From start-ups to international brands, to local businesses to franchises – we’ve got the tools and expertise to effectively work with them all. Read our featured testimonials below to see why our clients love working with us."
        img={BannerImg}
        background={Background}
      />
      <AllReviews />
    </Layout>
  )
}
