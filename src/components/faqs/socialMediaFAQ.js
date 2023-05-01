import React, { useState } from "react"
import styled from "styled-components"
import { Section, Container, Flex } from "../layoutComponents"
import { ButtonUnderline } from "../buttons"

import ArrowDown from "../../images/arrow-down-white.svg"

const device = {
  md: "48em",
}

const FaqWrapper = styled.div`
  background: var(--clr-accent);
  color: var(--txt-light);
  max-width: 700px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 1em;
  border-radius: var(--br);
`

const AccordionWrapper = styled.div`
  border-bottom: ${({ item }) =>
    item ? "none" : "1px solid var(--txt-light)"};
`

const TitleFlex = styled.div`
  padding: var(--spacer-sm);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${({ item }) => (item ? "4px solid #9ecaed" : "none")};

  &:hover {
    cursor: pointer;
    background: var(--clr-light-secondary);
    transition: 0.25s ease-in;
  }
`

const Text = styled.div`
  align-self: start;
`

const AccordionContent = styled.div`
  display: ${({ item }) => (item ? "block" : "none")};
`

const ArrowImg = styled.img`
  width: 15px;
  transform: ${({ item }) => (item ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.25s;
`

const Spacer = styled.div`
  margin-bottom: var(--spacer);
`

const AccordionItem = props => {
  const [item, itemOpen] = useState(false)

  function toggleItem() {
    itemOpen(!item)
  }
  return (
    <AccordionWrapper item={item}>
      <TitleFlex item={item} onClick={toggleItem}>
        <p className="italics">{props.question}</p>
        <ArrowImg item={item} src={ArrowDown} alt="" />
      </TitleFlex>
      <AccordionContent className="spacing" item={item}>
        <div className="spacing">
          <p className="body--small">{props.answer}</p>
        </div>
        <Spacer />
      </AccordionContent>
    </AccordionWrapper>
  )
}

export default function SocialMediaFAQ() {
  return (
    <FaqWrapper>
      <AccordionItem question="question 1" answer="answer 1" />
      <AccordionItem question="question 2" answer="answer 2" />
    </FaqWrapper>
  )
}
