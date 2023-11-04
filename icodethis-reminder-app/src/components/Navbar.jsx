import { useState, useMemo } from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: var(--tertiary);
  background-color: var(--primary);
`;

const Search = styled.input`
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 100px;
  color: var(--tertiary);
  background-color: rgba(255, 255, 255, 0.1);
  outline: none;

  &::placeholder {
    color: var(--secondary);
    opacity: 1;
  }
`;

const ReminderList = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
`;

const ReminderItem = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => (props.$isActive ? "var(--primary)" : "var(--tertiary)")};
  background-color: ${(props) =>
    props.$isActive ? "var(--tertiary)" : "inherit"};
  transition: 150ms;
  cursor: pointer;

  & > p {
    text-transform: uppercase;
    font-weight: 500;
  }

  & > span {
    padding: 0.25rem 0.75rem;
    border-radius: 100px;
    font-size: 0.75rem;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export default function Navbar({
  reminders,
  activeReminder,
  onReminderChange,
}) {
  const [search, setSearch] = useState("");

  const filteredReminders = useMemo(
    () => reminders.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())),
    [reminders, search]
  );

  return (
    <StyledNavbar>
      <Search
        type="text"
        name="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ReminderList>
        {filteredReminders.map((reminder) => {
          return (
            <ReminderItem
              key={reminder.name}
              $isActive={reminder.name === activeReminder.name}
              onClick={() => onReminderChange(reminder)}
            >
              <p>{reminder.name}</p>
              <span>{reminder.subcategories.length}</span>
            </ReminderItem>
          );
        })}
      </ReminderList>
    </StyledNavbar>
  );
}
