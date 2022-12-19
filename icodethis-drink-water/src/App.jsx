import {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FiMenu,FiBell } from 'react-icons/fi'
import {GiBottleVapors} from 'react-icons/gi'

const Card = styled.main`
  width: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 12px 12px #00000033;
  background-image: var(--card-background);
`

const Menu = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Subtitle = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
`

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
`

const Image = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`

const DrinkButton = styled.button`
  margin: 0 auto;
  padding: .5rem 2rem;
  width: 60%;
  border:0;
  border-radius: 100px;
  font-size: 1rem;
  color: var(--text-negative);

  &:active {
    background-color: var(--button-on-press);
  }
`

const Streak = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  color: var(--text-negative);
  background: var(--card-background-negative);
`

const StreakTitle = styled.p`
`

const DayList = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(7,1fr);
  grid-template-rows: repeat(2,1fr);
  gap: .5rem;
  justify-items: center;
  align-items: center;
`

const Day = styled.p`
  position: relative;
  text-align: center;
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
`

const Ball = styled.span`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: ${props => props.empty ? '#ccc' : 'var(--card-background)'};
`

function App() {

  const [count, setCount] = useState(0.00)
  const [isButtonPressed, setIsButtonPressed] = useState(false)

  const days = {
    Sunday: 0.50,
    Monday: 1.20,
    Tuesday: 2.00,
    Wednesday: 0.00,
    Thursday: 3.00,
    Friday: 1.1,
    Saturday: 0.8
  }

  const todayIndex = new Date().getDay()


  useEffect(() => {
    let interval
    if(isButtonPressed){
      interval = setInterval(() => {
        setCount(count + 0.05)
      },500)
    }else
      clearInterval(interval)

    return () => clearInterval(interval)
  }, [isButtonPressed, count])

  const handleButtonPress = () => {
    setIsButtonPressed(true)
  }

  const handleButtonRelease = () => {
    setIsButtonPressed(false)
  }

  const getWaterValueOnDay = (value,index) => {
    const currValue = (index === todayIndex) ? count : value;
    return (25 - 10 * (Math.min(currValue/2,1)));
  }

  return (
    <Card>
      <Menu>
        <FiMenu 
          size={24}
          color='var(--text)'
        />
        <FiBell 
          size={24}
          color='var(--text)'
        />
      </Menu>
      <Subtitle>Today</Subtitle>
      <Title>{count.toFixed(2)}L of 2L</Title>
      <Image>
        <GiBottleVapors 
          size={128}
          color='var(--text)'
        />
      </Image>
      <DrinkButton onMouseDown={handleButtonPress} onMouseUp={handleButtonRelease}>{isButtonPressed ? 'Drinking...' : 'Drink Water'}</DrinkButton>
      <Streak>
        <StreakTitle>Your Streak</StreakTitle>
        <DayList>

          {Object.entries(days).map(([key,value],index) => {
            return <>
              <Day 
                key={key}
                col={index+1} 
                row={1}
                className={index === todayIndex && 'active'}
              >
                {key.slice(0,1)}
              </Day>
              <Ball key={value} size={getWaterValueOnDay(value,index)} empty={value === 0}/>
            </>
          })}

        </DayList>
      </Streak>
    </Card>
  )
}

export default App
