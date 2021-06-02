import styled, { css } from "styled-components"
// import { useSpring } from "@react-spring/core"
// import { a as web } from "@react-spring/web"
import { useSnapshot } from "valtio"
import { state } from "@/store"

import Input from "./Input"
const Form: React.FC = () => {
  const { isLaptopOpen, step, isNextStep } = useSnapshot(state)
  // const springProps = useSpring({ open: Number(isLaptopOpen) })
  if (isLaptopOpen)
    return (
      <Box $ready={isNextStep}>
        {step === 1 && <Input type="text" placeholder="Enter name" param="name" requirement={str => str.length > 5} />}
        {step === 2 && (
          <Input
            type="email"
            placeholder="Enter email"
            param="email"
            requirement={str => {
              console.log("validate email!")
            }}
          />
        )}
        {step === 3 && (
          <Input
            as="textarea"
            rows="4"
            placeholder="Enter message"
            param="message"
            style={{ resize: "none" }}
            requirement={str => str.length > 1}
          />
        )}
        <Next
          onClick={() => {
            ++state.step
            state.isNextStep = false
          }}
        >
          Next
        </Next>
      </Box>
    )
  else return null
}

export default Form

const Box = styled.div`
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.6);
  width: 100vw;
  display: grid;
  grid-template-columns: min-content min-content;
  grid-column-gap: 3rem;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  transition: all 0.4s;
  ${({ $ready }) =>
    $ready &&
    css`
      height: 100vh;
      background: rgba(255, 102, 179, 0.8);
    `}
`
const Next = styled.button``