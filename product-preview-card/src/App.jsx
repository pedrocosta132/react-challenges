import styled from 'styled-components'

const Main = styled.main`
  margin: 0.5rem;
  width: 100%;
  max-width: 375px;
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 0.5rem;
  background-color: var(--neutral-3);
  box-shadow: 0 0 1.5rem 0 #00000055;
  overflow: hidden;

  @media screen and (min-width: 600px) {
    width: 600px;
    max-width: 600px;
    grid-template-columns: repeat(2, 50%);
  }
`

const Image = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('/images/image-product-mobile.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 600px) {
    height: auto;
    background-image: url('/images/image-product-desktop.jpg');
  }
`

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 600px) {
    padding: 2rem;
  }
`

const TitleLabel = styled.p`
  margin: 0;
  color: var(--neutral-2);
  letter-spacing: 0.5rem;
`

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  line-height: 0.9;
  color: var(--neutral-1);
`

const Text = styled.p`
  margin: 0;
  color: var(--neutral-2);
  line-height: 1.5;
`

const Price = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary);

  &::after {
    margin-left: 1rem;
    content: '${props => props.label || ''}';
    font-size: 1rem;
    font-weight: normal;
    text-decoration: line-through;
    color: var(--neutral-2);
  }
`

const Button = styled.button`
  padding: 1rem .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 0;
  border-radius: .5rem;
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--neutral-3);
  background-color: var(--primary);
  cursor: pointer;
  transition: filter 300ms;

  &:hover {
    filter: sepia(1);
  }
`

function App() {

  return (
    <Main>
      <Image />
      <Info>
        <TitleLabel>PERFUME</TitleLabel>
        <Title>Gabrielle Essence Eau De Parfum</Title>
        <Text>A floral, solar and voluptuos interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</Text>
        <Price label={"$169.99"}>$149.99</Price>
        <Button>
          <img src="/images/icon-cart.svg" alt="Shopping Cart" />
          Add to cart
        </Button>
      </Info>
    </Main>
  )
}

export default App
