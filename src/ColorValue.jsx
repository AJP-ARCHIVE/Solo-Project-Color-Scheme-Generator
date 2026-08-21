import React from "react"
import CopyAlert from "./CopyAlert"



export default function ColorValue( { scheme, code } ) {

 
    const [copied, setCopied] = React.useState(false)
    const [copiedValue, setCopiedValue] = React.useState("")
    const [selected, setSelected] = React.useState({id: null, value: null})
   


    function copyColorValue(e, id) {
        const copyColor = e.target.textContent
        //console.log(copyColor)
        //console.log("clicked")
        navigator.clipboard.writeText(copyColor)
        setCopied(prev => !prev) // true
        setCopiedValue(copyColor)
        setSelected({id: id, value: copyColor})
    }

  

    React.useEffect(() => {
        
        if (!copied) {
            return // if color is not copied/selected do nothing 
        }
        // timer to set duration of how long copy alert is shown 
        const timer = setTimeout(() => {
            setCopied(prev => !prev) // false 
        }, 1000)

        return () => clearTimeout(timer)
        
    }, [copied])



  
    // conditional rendering of color picker value based on selected dropdown value { code } prop 
    const colorValueCode = scheme.map(color => {
        const colorCode = code === "rgb" ? color.rgb : code === "hsl" ? color.hsl : code === "hex" ? color.hex : color.cmyk
      

        // conditional rendering based on whether a color was copied/selected 
        // use id to find which color value was selected 
        const colorValueElement = color.id === selected.id && copied ? <CopyAlert key={color.id} copiedValue={copiedValue}/>  : <button key={color.id} className="color-value" onClick={(e) => copyColorValue(e, color.id)}>{colorCode}</button>

   

        return (
            colorValueElement
            
            
        )
    })


    return (
        <>
        

        <section className="color-code-container">
   
    
            {colorValueCode} 
            
        </section>
         
    


    
        </>
    )
}


