import { useEffect, useState } from "react";
import styled from "styled-components";
import RemindersSection from "./ReminderSection";

const Wrapper = styled.div`
  padding: 1rem 0;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.5rem;
`;

export default function Reminders({ subcategories }) {
  const [activeSection, setActiveSection] = useState("");

  return (
    <Wrapper>
      {subcategories.map((item) => (
        <RemindersSection
          key={item.name}
          title={item.name}
          items={item.items}
          isActive={item.name === activeSection}
          onTitleClick={() => setActiveSection(item.name)}
        />
      ))}
    </Wrapper>
  );
}
