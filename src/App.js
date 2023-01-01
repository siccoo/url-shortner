import { useState } from 'react';
import './App.css';
import InputShortner from './components/inputShortner/InputShortner';
import LinkResult from './components/linkResult/LinkResult';

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container">
      <InputShortner setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
