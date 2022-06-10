import styled from 'styled-components'

const StyledRating = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const ImageWrapper = styled.div`
  width: 45px;
  height: 45px;
  align-self: flex-start;
  padding: 15px;
  border-radius: 50%;
  background-color: var(--grey-medium-50);
`

const Image = styled.img`
  width: 15px;
`

const Title = styled.h1`
  margin: 0;
`

const Text = styled.p`
  margin: 0;
  color: var(--grey-light);
`

const List = styled.ol`
  padding: 0;
  display: flex;
  justify-content: space-between;
`

const ListItem = styled.li`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  border-radius: 50%;
  background-color: var(--grey-medium-50);
  transition: 300ms;
  cursor: pointer;

  &:hover {
    background-color: var(--grey-medium);
  }

  &.active {
    background-color: var(--primary);
  }
`

const SubmitButton = styled.button`
  padding: 15px 0;
  border: 0;
  border-radius: 99px;
  color: var(--white);
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 4px;
  background-color: var(--primary);
  transition: 300ms;
  cursor: pointer;

  &:hover {
    color: var(--primary);
    background-color: var(--white);
  }
`

function Rating({ currRating, handleRatingChange, handleSubmit}) {
  return (
    <StyledRating>
      <ImageWrapper>
        <Image src="/images/icon-star.svg" alt="Star" />
      </ImageWrapper>
      <Title>
        How did we do?
      </Title>
      <Text>
        Please let us know how we did with your support request. All feedback is appreciatedto hel us improve our offering.
      </Text>
      <List>
        {[...Array(5).keys()].map(number => {
          number++
          return (
            <ListItem
              key={number}
              onClick={() => handleRatingChange(number)}
              className={number == currRating && 'active'}
            >
              {number}
            </ListItem>
          )
        })}
      </List>
      <SubmitButton 
        type='button'
        onClick={handleSubmit}
      >
        Submit
      </SubmitButton>
    </StyledRating>
  )
}

export default Rating