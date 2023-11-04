import { useState } from "react";
import styled from "styled-components";
import RemindersItem from "./ReminderItem";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.p`
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;

  .active > & {
    background-color: transparent;
  }
`;

const ItemList = styled.div`
  display: none;
  .active > & {
    display: block;
  }
`;

export default function RemindersSection({
  title,
  items,
  isActive,
  onTitleClick,
}) {
  return (
    <Section className={isActive ? "active" : undefined}>
      <Title onClick={!isActive ? onTitleClick : undefined}>{title}</Title>
      <ItemList>
        {items.map((item) => (
          <RemindersItem
            key={item.value}
            name={item.value}
            isCrossed={item.state === 0}
          />
        ))}
      </ItemList>
    </Section>
  );
}
