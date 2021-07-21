import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

function Header() {
  const result = useSelector(state => state.screen);

  return (
      < Container >
          <input type="text" disabled value={result}/>

      </Container>
  );
}

export default Header;