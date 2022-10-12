import QRCode from 'react-qr-code'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 375px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--white);
  box-shadow: 0 0 1rem #00000010;
`

const CodeWrapper = styled.div`
  width: 100%;
  padding: 44.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--primary);
`

const Title = styled.h1`
  margin: 0;
  max-width: 85%;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: var(--blue-dark);
`

const Text = styled.p`
  margin: 0 0 1rem 0;
  max-width: 80%;
  font-size: 1rem;
  text-align: center;
  color: var(--blue-grey);
`

function App() {

  return (
    <Main>
      <CodeWrapper>
        <QRCode
          value="https://www.frontendmentor.io/profile/pedrocosta132"
          bgColor='var(--primary)'
          fgColor='var(--white)'
          style={{maxWidth: '256px', height: 'auto', width: '100%'}} 
        />
      </CodeWrapper>
      <Title>Improve your front-end skills by building projects</Title>
      <Text>Scan the QR code to visit my profile in Frontend Mentor and take your coding skills to the next level</Text>
    </Main>
  )
}

export default App
