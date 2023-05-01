import React from "react"
import styled from "styled-components"

const MapFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border: 0;
`

export default function Map() {
  return (
    <div>
      <MapFrame
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701994.2325681003!2d-81.64092466790564!3d46.583976004784546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2f01e6445c1b3d%3A0x5eafb6f47374b853!2sThe%20Social%20Soulpreneur!5e0!3m2!1sen!2sca!4v1674609669240!5m2!1sen!2sca"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
