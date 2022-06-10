import { useState } from 'react'
import styled from 'styled-components'
import Rating from './components/Rating'
import ThankYou from './components/ThankYou'

const Main = styled.main`
  position: relative;
  width: 100%;
  max-width: 375px;
  padding: 30px;
  border-radius: 30px;
  background: var(--blue-dark);
  overflow: hidden;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;
    background: radial-gradient(circle at top, transparent 0,var(--blue-darker) 100%);
    opacity: 0.5;
    z-index: -1;
  }
`

function App() {
  const [submit,setSubmit] = useState(false)
  const [rating,setRating] = useState(0)

  const handleRatingChange = (newRating) => {
    setRating(newRating)
  }

  const handleSubmit = () => {
    if(rating === 0)
      return
    setSubmit(true)
  }

  return (
    <>
      <Main>
        {!submit ?
          <Rating 
            currRating={rating}
            handleRatingChange={handleRatingChange}
            handleSubmit={handleSubmit}
          />
        :
          <ThankYou 
            currRating={rating}
          />
        }
      </Main>
    </>
  )
}

export default App
