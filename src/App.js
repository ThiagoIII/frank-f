import React, { useState, useEffect } from 'react';
import './App.css';
const contentful  = require('contentful')


function App() {
  const [data, setItems] = useState(null)

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: "NpMJ0MOh4004AaR_yI8uLVRXKGR7ojxMmELnhYmWxek"
  });

  useEffect(() => {
    client
    .getAssets()
    .then(data => setItems(data))
  },[client])

  
  return (
    <>
    <a id="githubLink" href="https://github.com/ThiagoIII?tab=repositories" rel="noreferrer noopener" target="_blank">Developed by ThiagoIII, click here to check my github repo</a>
    <a id="jumpBackToTop" href="#githubLink">Top</a>
    <header>
      <h1>Frank Frazetta</h1>
      <h2>The legend!</h2>
    </header>

      <ul>
        {
          data != null ? data.items.map(item =>
          ( <li>
              <picture>
                <source type="image/webp" sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw"  srcSet={`${item.fields.file.url}?fm=webp&w=300&fit=pad 300w,
                                ${item.fields.file.url}?fm=webp&w=500&fit=pad 500w`} />
                <source sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw" srcSet={`
                ${item.fields.file.url}?w=300&fit=pad 300w, 
                ${item.fields.file.url}?w=500&fit=pad 500w`} />
                <img sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw" src={item.fields.file.url} alt="img" />
              </picture>
            </li>)
          ) 
          : null
        }
      </ul>
      <footer>
        <a href="https://github.com/ThiagoIII?tab=repositories" rel="noreferrer noopener" target="_blank">Developed by ThiagoIII, click here to check my github repo</a>
      </footer>
    </>
  );
}

export default App;
