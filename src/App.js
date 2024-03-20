// src/App.js
import React, { Suspense } from 'react';

const BitcoinPrice = React.lazy(() => import('./Component/BitcoinPrice'));

function App() {
  return (
    <div>
      <h1>Bitcoin Price App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <BitcoinPrice />
      </Suspense>
    </div>
  );
}

export default App;
