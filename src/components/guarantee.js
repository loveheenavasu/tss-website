import React from "react"
import { Container, Section } from "./layoutComponents"
import {
  FaUserClock,
  FaHammer,
  FaHandPaper,
  FaThumbsUp,
  FaCut,
} from "react-icons/fa"
import { GrUserWorker } from "react-icons/gr"
import styled from "styled-components"
import { ButtonInline } from "./buttons"
import { StaticImage } from "gatsby-plugin-image"

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 8em;

  @media screen and (max-width: 56em) {
    display: flex;
    flex-direction: column;
  }
`

const Box = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / -1;
  z-index: 2;

  background: var(--clr-light-secondary);
  padding: 2em;
  box-shadow: var(--shadow-light);
  border-radius: var(--br);

  h3 {
    color: var(--txt-dark-secondary);
  }
`

const Item = styled.div`
  text-align: center;
`

const Img = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
`

export default function Guarantee() {
  return (
    <Section>
      <Container className="spacing">
        <h2 className="title caps italics center bold">
          we'll give you one less thing to worry about - hiring the right crew
        </h2>
        <GridWrapper>
          <Img>
            <StaticImage
              src="../images/window-installation-truck.jpg"
              alt="truck used for window installations"
            />
          </Img>
          <Box className="spacing">
            <h3 className="upper center">our guarantee</h3>
            <div className="spacing">
              <Item className="spacing-sm">
                <FaUserClock />
                <h4 className="caps bold">excellent lead time</h4>
                <p>
                  Every{" "}
                  <ButtonInline to="/services/home-window-repair-calgary">
                    window installation
                  </ButtonInline>{" "}
                  job is finished on time and within budget.
                </p>
              </Item>
              <Item className="spacing-sm">
                <FaHammer />
                <h4 className="caps bold">we handle tough jobs</h4>
                <p>
                  We specialize in big &{" "}
                  <ButtonInline to="/services/home-window-repair-calgary">
                    highrise window repair
                  </ButtonInline>{" "}
                  jobs - the ones no one else wants to do!
                </p>
              </Item>
              <Item className="spacing-sm">
                <FaHandPaper />
                <h4 className="caps bold">we don't cut corners</h4>
                <p>
                  Every{" "}
                  <ButtonInline to="/services/home-window-repair-calgary">
                    window repair & installation
                  </ButtonInline>{" "}
                  job is completed properly and professionaly.
                </p>
              </Item>
              <Item className="spacing-sm">
                <FaThumbsUp />
                <h4 className="caps bold">24/7 customer care</h4>
                <p>
                  We provide 24/7 customer service for{" "}
                  <ButtonInline to="/services/commercial-window-repair-calgary">
                    commercial window repair
                  </ButtonInline>{" "}
                  jobs.
                </p>
              </Item>
              <Item className="spacing-sm">
                <FaCut />
                <h4 className="caps bold">cost savings</h4>
                <p>
                  We';; find the best products for the job to help save you
                  money.
                </p>
              </Item>
              <Item className="spacing-sm">
                <GrUserWorker />
                <h4 className="caps bold">elite training</h4>
                <p>
                  We provide elite training to all of our staff to ensure every
                  project is delivered with exellence.
                </p>
              </Item>
            </div>
          </Box>
        </GridWrapper>
      </Container>
    </Section>
  )
}
