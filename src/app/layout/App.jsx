import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }
  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <>
        <Container className='main'>
          <Routes>
            <Route
              exact
              path='/'
              element={<NavBar />}
              setFormOpen={handleCreateFormOpen}
            />

            <Route index element={<HomePage />} />

            <Route exact path={'/events'} element={<EventDashboard />} />
            <Route path='/events/:id' element={<EventDetailedPage />} />
            <Route path='/createEvent' element={<EventForm />} />
          </Routes>
        </Container>
      </>
    </>
  );
}
