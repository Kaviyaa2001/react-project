import React from 'react';
import './App.css';
import WorkArea from "./components/WorkArea";
import OutputView from './components/OutputView';
import PreviewArea from './components/PreviewArea';

function App() {
  return (
    <div className="container">
      <div className="section"><WorkArea/></div>
      <div className="section_1"> <OutputView/></div>
      <div className="section_2"> <PreviewArea/></div>
    </div>
  );
}

export default App;
