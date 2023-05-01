import React from "react"
import styled from "styled-components"
import { AnchorInline, ButtonInline } from "./buttons"
import ServiceForm from "./forms/serviceForm"
import { Container, Section } from "./layoutComponents"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 4em;

  @media screen and (max-width: 48em) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const Aside = styled.div`
  grid-column: 1 / span 1;

  .service-form {
    @media screen and (max-width: 48em) {
      display: none;
    }
  }
`

const Navigation = styled.div`
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  padding: 2em;

  ul {
    list-style-type: none;
    margin: var(--spacer) 0 0 0;
    padding: 0;
    text-transform: capitalize;

    & > * + * {
      margin-top: 0.2em;
    }
  }
`

const Content = styled.div`
  grid-column: 2 / -1;
  @media screen and (max-width: 48em) {
    grid-row: 1 / span 1;
  }
`

const Img = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`

const ServiceAreas = styled.div`
  padding: 2em;
  border: 1px solid var(--txt-dark-secondary);
  border-radius: var(--br);
`

export default function ServicePage(props) {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Aside className="spacing">
            <Navigation className="spacing">
              <h3 className="caps accent title bold">
                glass <br /> services
              </h3>
              <ul>
                <li>
                  <ButtonInline to="/services/home-window-repair-calgary">
                    home window repair
                  </ButtonInline>{" "}
                  <hr />
                </li>
                <li>
                  <ButtonInline to="/services/commercial-window-repair-calgary">
                    commercial window repair
                  </ButtonInline>{" "}
                  <hr />
                </li>
                <li>
                  <ButtonInline to="/services/storm-doors-calgary">
                    storm doors
                  </ButtonInline>{" "}
                  <hr />
                </li>
              </ul>
            </Navigation>
            <div className="service-form">
              <ServiceForm />
            </div>
          </Aside>
          <Content className="spacing">
            <div>
              <h1 className="title dark bold italics">{props.title}</h1>
              <p className="caps dark bold">{props.subtitle}</p>
            </div>
            <div>
              <p>{props.mainContent}</p>
            </div>
            <Img>
              <img src={props.mainImg} alt={props.mainAlt} />
            </Img>
            <ServiceAreas>
              <p className="center bold">
                <ButtonInline to=""></ButtonInline>
                We provide{" "}
                <ButtonInline to="/services/home-window-repair-calgary">
                  residential glass installation & repair
                </ButtonInline>
                ,{" "}
                <ButtonInline to="/services/commercial-window-repair-calgary">
                  commercial window repair
                </ButtonInline>
                ,{" "}
                <ButtonInline to="/services/storm-doors-calgary">
                  new storm door installations
                </ButtonInline>
                , and more to Calgary, Airdrie, Okotoks, Cochrane, Chestermere,
                Foothills, Strathmore, and more surrounding areas and throughout
                Alberta! Call{" "}
                <AnchorInline href="tel: 403-891-3172">
                  403-891-3172
                </AnchorInline>{" "}
                to book a service, or use our{" "}
                <ButtonInline to="/contact">online contact form.</ButtonInline>
              </p>
            </ServiceAreas>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  )
}
