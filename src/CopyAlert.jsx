import React from 'react'



export default function CopyAlert( { copiedValue }) {

    // notification when a color value is copied/selected 
    return (
        <div className="copy-alert color-value" role="status" aria-live="polite">
            <p>{copiedValue} copied to clipboard!</p>
        </div>
    )
}

