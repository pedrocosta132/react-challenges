import styled from 'styled-components'
import { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const StyledThankYou = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  animation: ${fadeIn} 300ms ease-in; 
  
`

const Image = styled.img`
  width: 162px;
`

const Rating = styled.p`
  padding: 10px 15px;
  border-radius: 99px;
  font-size: 13px;
  color: var(--primary);
  background-color: var(--grey-medium-50);
`

const Title = styled.h1`
  margin: 0;
  font-size: 30px;
`

const Text = styled.p`
  margin: 0;
  font-size: 13px;
  color: var(--grey-light);
  text-align: center;
`

function ThankYou({currRating}) {
  return (
    <StyledThankYou>
      <Image src="/images/illustration-thank-you.svg" alt="Illustration of a mobile phone"/>
      <Rating>You selected {currRating||0} out of 5</Rating>
      <Title>Thank You!</Title>
      <Text>We appreciate you taking the time to give a rating.<br/>If you ever need more support, don't hesitate to get in touch!</Text>
    </StyledThankYou>
  )
}

export default ThankYou