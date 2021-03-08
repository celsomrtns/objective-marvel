import React from 'react'

export const Alert = ({alert}) => {
    return (
        alert !== null && (
            <div>{alert.msg}</div>
        )
    )
}

export default Alert