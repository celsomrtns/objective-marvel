import React from 'react'

function CharacterComics({comics}) {
    return (
        <div>
            <strong>Comics</strong>
            {comics.comics.items.map(edicoes => (
                <p>{edicoes.name}</p>
            ))}
        </div>
    )
}

export default CharacterComics
