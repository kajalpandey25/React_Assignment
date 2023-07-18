import React, { useState } from 'react'
import './App.css'
import Button from './Components/Button'

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleClick = () => {
    setShowParagraph(true);
  };

  return (
    <>
      <Button Text='Click Here' onClick={handleClick} />
      {showParagraph && <p>Welocme to our React Assignment</p>}
    </>
  );
}

export default App;
