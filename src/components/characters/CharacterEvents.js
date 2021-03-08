import React from 'react'

let timestamp = new Date().getTime();

function CharacterEvents({events}) {
    return (
        <div className="events">
            {events.items.map(event => (
                <p key={timestamp = timestamp + 1}>{event.name}</p>
            ))}
        </div>
    )
}

export default CharacterEvents
