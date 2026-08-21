import React from 'react'
import './App.css'
import Colors from './Colors'
import ColorValue from './ColorValue'

// Color API
// https://www.thecolorapi.com/docs#schemes-generate-scheme-get

export default function App() {
 
  // optional mode types for Color API
  const modes = ["monochrome", "monochrome-dark", "monochrome-light", "analogic", "complement", "analogic-complement", "triad", "quad"]

  // optional URI parameter of Color API
  const codes = ["hex", "rgb", "hsl", "cmyk"]

  

  const [scheme, setScheme] = React.useState(null) // Color API results 
  const [code, setCode] = React.useState(codes[0]) // default -> 'hex'
  const [mode, setMode] = React.useState(modes[0]) // default -> 'monochrome'
  const [seedColor, setSeedColor] = React.useState('000000') // default color

  // mode options 
  const modeChoices = modes.map(mode => <option key={mode} value={mode}>{mode.charAt(0).toUpperCase() + mode.slice(1)}</option>)


   
  // color format 'code' choices
  const codeChoices = codes.map(code => <option key={code} value={code}>{code}</option>)



  async function getColorScheme() {
      //const seedColor = formData.get("color")
      // console.log(`seed color is: ${seedColor}`)
      // const mode = formData.get("mode")
      // console.log(`mode is ${mode}`)

      try {
          const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.replace("#", "")}&mode=${mode}&count=5`)
          const data = await response.json()
          console.log(data)
          setScheme(data.colors.map((color, index) => {
            return {id: index, hex: color.hex.value, rgb: color.rgb.value, hsl: color.hsl.value, cmyk: color.cmyk.value}
          }))
          }
      catch (err) {
          console.error(err)
      }
  }

    // track input and dropdown changes 
    function handleChange(e) {
      if (e.target.name === "code") {
          //console.log(e.target.value)
          setCode(e.target.value)
      }
      if (e.target.name === "mode") {
          //console.log(e.target.value)
          setMode(e.target.value)
      }
      if (e.target.name === "color") {
          //console.log(e.target.value)
          setSeedColor(e.target.value)
      }
  }


  return (
    <main>
       <header className="header">
          <input id="seed-color" type="color" name="color" defaultValue="#000000" onChange={handleChange} />

          <select id="mode" name="mode" defaultValue={modes[0]} onChange={handleChange}>
              {modeChoices}
          </select>

          <button className="scheme-btn" onClick={getColorScheme}>Get color scheme</button>
       </header>

       {scheme && 
        <section className="main-container">
          <div className="color-picker">
            <label id="codes" className="picker">Select color picker </label>
            <select id="codes" name="code" className="code-selector" onChange={handleChange}>{codeChoices}</select> 
          </div>

            <div className="wrapper">
              
     
              <Colors scheme={scheme} />
              
              
              
              
              <ColorValue scheme={scheme} setScheme={setScheme} code={code} />
              
           </div>
     
      

       </section>
       
     }


       
    </main>
  )
}

