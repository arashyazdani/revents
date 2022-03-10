import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
  Image,
} from 'semantic-ui-react';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            style={{ marginBottom: 12 }}
          />
        </Header>
        <Button onClick={() => navigate('/events')} size='huge' inverted>
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  );
}
