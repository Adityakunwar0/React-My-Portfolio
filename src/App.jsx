import React from 'react'
import PortfolioLoader from './components/PortfolioLoader'
import Home from './pages/Home'
import { useState } from 'react';

const App = () => {
    const [loaded, setLoaded] = useState(false);

  return (
    <>
    {!loaded && <PortfolioLoader onComplete={() => setLoaded(true)} />}
      {loaded && <Home />}
      </>
  )
}

export default App