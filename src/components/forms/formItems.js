import styled from "styled-components"

export const Label = styled.label`
  display: block;
  font-family: var(--ff);
  font-size: var(--fs-sm);
`

export const Input = styled.input`
  display: block;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid var(--txt-dark-secondary);
  padding: 1.2em 1.2em 1.2em 0;
  font-size: var(--fs-sm);
  font-family: var(--ff);

  &:focus {
    outline: none;
    border-bottom: 2px solid var(--clr-accent);
  }

  &.radio {
    height: 20px;
    width: 20px;
    display: inline;
  }
`
export const Select = styled.select`
  display: block;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid var(--txt-dark-secondary);
  padding: 1.2em 1.2em 1.2em 0;
  font-size: var(--fs-sm);
  font-family: var(--ff);

  &:focus {
    outline: none;
    border-bottom: 2px solid var(--clr-accent);
  }
`

export const TextArea = styled.textarea`
  display: block;
  width: 100%;-
  box-shadow: none;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid var(--txt-dark-secondary);
  padding: 1.2em 1.2em 1.2em 0;
  font-size: var(--fs-sm);
  font-family: var(--ff);
  resize: none;

  &:focus {
    utline: none;
    border-bottom: 2px solid var(--clr-accent);
  }
`

export const Submit = styled.input`
  cursor: pointer;
  width: 100%;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 2em;
  background: var(--clr-accent);
  color: var(--txt-light);
  border: 1px solid var(--clr-accent);
  transition: all 0.2s linear;
  -webkit-appearance: none;

  :hover {
    background: var(--clr-accent-darker);
  }
`
