import React from 'react'
import { GiSunSpear, GiNightSky } from 'react-icons/gi';

const ToggleButton = () => {
    const [toggle, setToggle] = React.useState('day')
    
    const handleToggleTheme = () => {
      let toggleButton = document.getElementById('themeButton')
      toggleButton.classList.toggle('toggle') 
      if( getComputedStyle(document.body).getPropertyValue('background-color') === "rgb(255, 255, 255)"){
        document.documentElement.style.setProperty('--bodyBgColor', 'black') //I'm doing this way just to show CSS variables manipulation, in a client's app I'd do with a class and the toggle method as I did with the button
        setToggle('night')
      } else {
        document.documentElement.style.setProperty('--bodyBgColor', 'white')
        setToggle('day')
      } 
    }
  
    return  <button onClick={() => handleToggleTheme()} id="themeButton" type="button">
              Go to the {toggle === 'day' ? 'darkness' : 'light'}
              {
                toggle === 'day'
                ? <GiNightSky id="themeButtonIconDark"/>
                : <GiSunSpear id="themeButtonIconLight"/>
              }
            </button>
  } 

  export default ToggleButton