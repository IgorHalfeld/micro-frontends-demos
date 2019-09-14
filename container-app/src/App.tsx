import React from 'react';
import Container from './components/Container';
import Checkout from './components/Checkout';
import { useGlobalState } from './store';

const App = (): JSX.Element => {
  const [hasCurrentAppActive] = useGlobalState('hasCurrentAppActive');

  return (
    <Container>
      {hasCurrentAppActive && <Checkout />}
    </Container>
  );
};
export default App;
