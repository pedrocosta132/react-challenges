import styled, { css } from "styled-components";

const Item = styled.p`
  position: relative;
  width: 50%;
  padding: 0.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--primary);
  cursor: pointer;

  ${(props) =>
    props.$isCrossed &&
    css`
      opacity: 0.5;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        top: 50%;
        background-color: var(--primary);
      }
    `}
`;

export default function RemindersItem({ name, isCrossed }) {
  return <Item $isCrossed={isCrossed}>{name}</Item>;
}
