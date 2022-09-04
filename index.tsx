import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const root2 = createRoot(document.getElementById('root'));

////

root2.render(
  <StrictMode>
    <App />
  </StrictMode>
);
