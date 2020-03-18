import React from 'react';
import { Icon, Container } from 'semantic-ui-react';

const NoMatch = () => {
  return (
    <Container>
      <Icon name="minus circle" size="huge" color="grey" />
      <strong>Page not found!</strong>
    </Container>
  );
};

export default NoMatch;
