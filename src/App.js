import React from 'react';
import { Wrapper } from './view/pages/Wrapper';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Wrapper />
    </BrowserRouter>
  );
}

export default App;
