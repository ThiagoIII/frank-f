import React, { useState, useEffect } from 'react';
import ToggleButton from './components/ToggleButton'
import client from './services/contentfulClient'
import handleTargets from './helpers/handleTargets'
import {Helmet} from "react-helmet";
import './App.css';

function App() {
  const [data, setItems] = useState(null)

  useEffect(() => {
    data == null 
    ? client
      .getAssets()
      .then(data => setItems(data))
    :  handleTargets(data) 
  },[data])

  return (
    <>
      <Helmet>
          <title>FFrazetta - The Legend</title>     
          <meta name="description" content="Frank F - the Myth!" data-react-helmet="true" />
      </Helmet>
      <a id="githubLink" href="https://github.com/ThiagoIII?tab=repositories" rel="noreferrer noopener" target="_blank">Developed by ThiagoIII, click here to check my github repo</a>
      <a id="jumpBackToTop" href="#githubLink">Top</a>
      <ToggleButton />
      <header>
        <h1>Frank Frazetta</h1>
        <h2>The legend!</h2>
      </header>
      <ul>
        {
          data != null 
          ? data.items.map( (_,index) => {
            return <li key={index} data-index={index} className="lazyload"></li>
          })
          : <li>...loading images</li> 
        }
      </ul>
      <footer>
        <a href="https://github.com/ThiagoIII?tab=repositories" rel="noreferrer noopener" target="_blank">Developed by ThiagoIII, click here to check my github repo</a>
      </footer>
    </>
  );
}

export default App;
