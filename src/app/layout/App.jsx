import React, {useState} from 'react';
import { Container } from 'semantic-ui-react';
import EventDahboard from '../../features/events/eventDashboard/eventDashboard';
import NavBar from '../../features/nav/NavBar';

export default function App() {
  const [formOpen, setFormOpen] = useState(false); 
  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        <EventDahboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </>
  );
}
