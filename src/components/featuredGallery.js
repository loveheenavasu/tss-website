import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { AnchorInline, ButtonPrimary } from "./buttons"
import { Container, GridThree, Section } from "./layoutComponents"

export default function FeaturedGallery() {
  return (
    <Section>
      <Container className="spacing">
        <h2 className="title bold italics center">
          glass installation & repair jobs
        </h2>
        <GridThree>
          <StaticImage
            className="stretch"
            src="../images/gallery/featured/window-repair-1.jpg"
            alt="calgary glass contractor"
          />
          <StaticImage
            className="stretch"
            src="../images/gallery/featured/window-repair-2.jpg"
            alt="calgary glass contractor"
          />
          <StaticImage
            className="stretch"
            src="../images/gallery/featured/window-repair-3.jpg"
            alt="calgary glass contractor"
          />
          <StaticImage
            className="stretch"
            src="../images/gallery/featured/window-repair-4.jpg"
            alt="calgary glass contractor"
          />
          <StaticImage
            className="stretch"
            src="../images/gallery/featured/window-repair-5.jpg"
            alt="calgary glass contractor"
          />
          <StaticImage
            className="stretch"
            src="../images/gallery/featured/window-repair-6.jpg"
            alt="calgary glass contractor"
          />
        </GridThree>
        <div className="center spacing">
          <h3 className="italics caps">request a service</h3>
          <p>
            Call us at{" "}
            <AnchorInline href="tel: 403-891-3172">403-891-3172</AnchorInline>{" "}
            or fill out our contact form to reuest a service or free estimate
            for us!
          </p>
          <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
        </div>
      </Container>
    </Section>
  )
}
