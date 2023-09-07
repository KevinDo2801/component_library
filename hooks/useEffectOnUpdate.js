import React from "react"

export default function useEffectOnUpdate(effectFunction, deps) {
    const firstRender = React.useRef(false)
    
    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            effectFunction()
        }
    }, deps)
}