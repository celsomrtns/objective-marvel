import React from 'react'

let timestamp = new Date().getTime();

function CharacterSeries({series}) {
    return (
        <div className="series">
            {series.items.map(serie => (
                <p key={timestamp = timestamp + 1}>{serie.name}</p>
            ))}
        </div>
    )
}

export default CharacterSeries
