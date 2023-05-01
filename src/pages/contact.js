import React from "react"
import Banner from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import { Container, Section } from "../components/layoutComponents"
import FormContact from "../components/forms/formContact"
import SEO from "../components/seo"
import BannerContact from "../components/banners/bannerContact"
import BannerImg from "../images/hero-circles-full.svg"

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact Us - Get Quote From Your New Marketing Team"
        description="Contact Us To Learn How we Can Help Your Business.
        Call (705) 923-1129 Or Send Us A Message on this page!"
      />
      <FormContact title="get in touch with us using the form below" />
    </Layout>
  )
}
