import React from 'react'



function Colors( { scheme }) {

 

    // Map over prop 'scheme' to render color boxes 
    const colorBoxElement = scheme.map(color => <div key={color.id} className="color-box" style={{backgroundColor: color.hex}}></div>)

    return (
        <>
   
        <section className="color-container">
         
            {colorBoxElement} 
          
          
        </section>

     



        </>
    )
}

export default React.memo(Colors)