import React from "react"
import styled from "styled-components"
import { Actions, Container, Flex } from "../layoutComponents"
import { ButtonPrimary, AnchorInline, AnchorPrimary } from "../buttons"
import Breadcrumb2Links from "../breadcrumbs/breadcrumb2links"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  background: url("../../images/tss-hero-1.jpg"), rgba(0, 0, 0, 0.1);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Text = styled.div`
  background: var(--clr-light-secondary);
  padding: 2em;
  border-radius: var(--br);
  box-shadow: var(--shadow-light);

  h2 {
    color: var(--clr-accent);
  }
`

// banner with only 2 links in the breadcrumb
export default function BannerContact(props) {
  return (
    <Wrapper>
      <Text className="spacing">
        <div>
          <Breadcrumb2Links
            to1={props.to1}
            link1={props.link1}
            to2={props.to2}
            link2={props.link2}
          />
          <hr />
          <h2 className="title bold accent">{props.title}</h2>
        </div>
        <p className="body--small">{props.description}</p>
        <Actions>
          <AnchorPrimary className="bold italics" href="tel: 705-923-1129">
            (705) 923-1129
          </AnchorPrimary>
        </Actions>
      </Text>
    </Wrapper>
  )
}
