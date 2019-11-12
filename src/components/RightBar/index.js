import React from 'react';
import { Container, Header } from './styles';
import getTicker from '../../services/api';
export default function RightBar() {
  
  return (
    <Container>
        <Header>
            <h4>Coins</h4>
        </Header>
    </Container>
  );
}
