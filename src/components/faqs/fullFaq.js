import React, { useState } from "react"
import styled from "styled-components"
import { Section, Container, Flex } from "../layoutComponents"
import { ButtonUnderline } from "../buttons"

import ArrowDown from "../../images/arrow-down.svg"

const device = {
  md: "48em",
}

const AccordionWrapper = styled.div`
  border-bottom: ${({ item }) =>
    item ? "none" : "1px solid var(--clr-accent)"};
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
  width: 25px;
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
        <p className="bold">{props.question}</p>
        <ArrowImg item={item} src={ArrowDown} alt="" />
      </TitleFlex>
      <AccordionContent className="spacing" item={item}>
        <div className="spacing">
          <p>{props.answer}</p>
        </div>
        <Spacer />
      </AccordionContent>
    </AccordionWrapper>
  )
}

export default function FeaturedFaq() {
  return (
    <Section>
      <Container className="spacing-lg">
        <h2 className="title italics bold center">
          Get your questions answered by our{" "}
          <span className="accent">car loan professionals!</span>
        </h2>
        <Flex>
          <div>
            <AccordionItem
              question="How to get a car loan with bad credit canada?"
              answer="We have lenders that specialize in helping customers with bad or limited credit car loans Canada. We work with them to help you get approved for a vehicle that fits your budget and needs. Starting out in a bad credit car loan will allow you to get driving right away, while building your credit and rewriting your credit history."
            />
            <AccordionItem
              question="What is the minimum credit score for a car loan in Canada?"
              answer="There is no minimum score! There are programs available for people in any situation such as consumer proposal or bankruptcy. We work with all credit situations so do not feel alone. We're here to help you get a vehicle regardless of your credit history or score."
            />
            <AccordionItem
              question="How do I choose a lender for a car loan in Canada?"
              answer="We are highly experienced in finding you the best case scenario. This means finding a lender that best suits you and your needs. Depending on your situation, we'll find the right bank for you!"
            />
          </div>
          <div>
            <AccordionItem
              question="Who has 0 percent financing in Canada for a car loan?"
              answer="0% financing is not offered by banks, but rather, the manufacturer. They buy down the interest rate to make their vehicles more attractive to customers. This may only be offered for certain models and for individuals who meet their criteria."
            />
            <AccordionItem
              question="Is it a good time to get a car loan in Canada?"
              answer="It's never a bad time to get a car loan in Canada and to get driving! You can start rebuilding your credit with an auto loan - and much faster than you'd even think. We are here to get you the best interest rate for your credit situation. 

"
            />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
