import { useMemo, useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import { reminderData } from "./data";
import Reminders from "./components/Reminders";

const Card = styled.main`
  min-height: 50vh;
  display: flex;
  background-color: var(--tertiary);
`;

function App() {
  const reminders = useMemo(() => reminderData, []);

  const [activeReminder, setActiveReminder] = useState(reminders[0]);

  const handleNewReminder = (reminder) => {
    setActiveReminder(reminder);
  };

  return (
    <Card>
      <Navbar
        reminders={reminders}
        activeReminder={activeReminder}
        onReminderChange={handleNewReminder}
      />
      <Reminders subcategories={activeReminder.subcategories} />
    </Card>
  );
}

export default App;
