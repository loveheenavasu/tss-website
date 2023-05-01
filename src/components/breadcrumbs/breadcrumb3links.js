import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BreadcrumbLink = styled(props => <Link {...props} />)`
  display: inline-block;
  color: var(--txt-dark-secondary);
  text-decoration: none;
  margin: 0 0.5em 0 0.5em;
  text-transform: capitalize;

  &:nth-child(1) {
    margin-left: 0;
  }

  &:hover {
    cursor: pointer;
    color: var(--clr-accent);
  }
`

export default function Breadcrumb3Links(props) {
  return (
    <div>
      <BreadcrumbLink to={props.to1}>{props.link1}</BreadcrumbLink>>
      <BreadcrumbLink to={props.to2}>{props.link2}</BreadcrumbLink>>
      <BreadcrumbLink to={props.to3}>{props.link3}</BreadcrumbLink>
    </div>
  )
}
