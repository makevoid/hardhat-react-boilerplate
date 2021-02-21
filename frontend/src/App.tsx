import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Symfoni } from "./hardhat/SymfoniContext";
import { Greeter } from './components/Greeter';
import { Greeter2 } from './components/Greeter2';
import { Token } from './components/Token';
import { Section, Container, Hero, Heading } from 'react-bulma-components';

function App() {

  return (
    <Container className="bordered">
      <Hero color="primary">
        <Hero.Body>
          <Container>
            <Heading>
              Eth App
            </Heading>
          </Container>
        </Hero.Body>
      </Hero>

      <Symfoni autoInit={true} >
        <Section>
          <Heading size={4}>
            Greeter:
          </Heading>
          <Greeter></Greeter>
          <Greeter2></Greeter2>
          <Token></Token>
        </Section>
      </Symfoni>
    </Container>
  );
}

export default App;
