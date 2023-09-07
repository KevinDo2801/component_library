import React from "react"
import classnames from "classnames"

export default function Badges({ children, className, variant, ...rest }) {
    let variantClass = variant && `badges-${variant}`
    const allClasses = classnames('badges', variantClass, className)

    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}