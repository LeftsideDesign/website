import styled from "styled-components"
import { useSnapshot } from "valtio"
import { state } from "@/store"

import FileZone from "./FileZone"

const Review: React.FC = () => {
  const { name, email, message, files } = useSnapshot(state)
  return (
    <Box>
      <Content>
        <Key>Name:</Key>
        <Value>{name}</Value>
        <Key>Email:</Key>
        <Value>{email}</Value>
        <Key>Message:</Key>
        <Value>{message}</Value>
        {!!files.length && <FileZone style={{ gridColumn: "1 / -1" }} />}
      </Content>
      <SubmitButton onClick={() => console.log("SEND EMAIL VIA NETLIFY FUNCTIONS?")}>
        <span>SEND EMAIL</span>
      </SubmitButton>
    </Box>
  )
}

export default Review

const Box = styled.div`
  display: flex;
  flex-direction: column;
`
const Content = styled.div`
  padding: 2rem 2rem 0;
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 1rem;
  filter: drop-shadow(1rem 1rem 0 #2d2a32) drop-shadow(-1rem -1rem 0 #2d2a32);
  max-height: 45rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &:after {
    content: "";
    height: 1rem; // bottom padding on overflow because CSS grid?
  }
`
const Key = styled.h4`
  justify-self: end;
  font-size: 2rem;
`
const Value = styled.p`
  max-width: 25rem;
  font-size: 2rem;
  word-wrap: break-word;
`
const SubmitButton = styled.button`
  margin-top: 3rem;
  padding: 1rem;
  color: #2d2a32;
  font-family: Orbitron;
  font-weight: 500;
  font-size: 2.6rem;
  background: white;
  border: none;
  filter: drop-shadow(6px 6px 0 #2d2a32) drop-shadow(-6px -6px 0 #2d2a32);
  transition: all 0.4s;
  span {
    filter: drop-shadow(6px 6px 0 rgba(235, 235, 235, 1)) drop-shadow(-6px -6px 0 rgba(235, 235, 235, 0.5));
  }
  &:hover {
    cursor: pointer;
    letter-spacing: 3px;
    filter: drop-shadow(6px 6px 0 #2d2a32) drop-shadow(-6px -6px 0 #2d2a32);
  }
`