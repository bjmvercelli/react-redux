import React from 'react';

import { Container } from './styles';

function Header(props) {
  return (
      < Container >
          <input type="text" disabled value={props.result}/>

      </Container>
  );
}

export default Header;