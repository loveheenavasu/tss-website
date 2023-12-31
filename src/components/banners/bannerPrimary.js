import React from "react"
import styled from "styled-components"
import { Actions, Container, Flex } from "../layoutComponents"
import { ButtonPrimary, AnchorInline } from "../buttons"
import Breadcrumb2Links from "../breadcrumbs/breadcrumb2links"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 8em auto auto auto;
  grid-template-columns: 4em 0.5fr 2em 0.5fr 2em;

  @media screen and (max-width: 48em) {
    grid-template-columns: 4em 1fr 4em;
  }
`

const Bg = styled.div`
  background: ${props => `url(${props.background})`}, rgba(0, 0, 0, 0.1);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
`

const Text = styled.div`
  background: var(--clr-light-secondary);
  padding: 2em;
  border-radius: var(--br);
  box-shadow: var(--shadow-light);

  grid-row: 2 / span 2;
  grid-column: 2 / span 2;
  z-index: 3;

  h2 {
    color: var(--clr-accent);
  }
`

const Img = styled.div`
  grid-row: 2 / -1;
  grid-column: 3 / -1;
  z-index: 2;

  @media screen and (max-width: 48em) {
    display: none;
  }

  img {
    height: 500px;
  }
`

// banner with only 2 links in the breadcrumb
export default function Banner(props) {
  return (
    <Wrapper>
      <Bg background={props.background} />
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
          <ButtonPrimary to="/contact">let's chat &#8594;</ButtonPrimary>
          <AnchorInline className="bold italics" href="tel: 705-923-1129">
            <span className="dark">Or Call Us:</span> <br />
            (705) 923-1129
          </AnchorInline>
        </Actions>
      </Text>
      <Img>
        <img src={props.img} alt={props.alt} />
      </Img>
    </Wrapper>
  )
}
