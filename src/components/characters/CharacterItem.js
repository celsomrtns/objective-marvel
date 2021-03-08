import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CharacterSeries from './CharacterSeries'
import CharacterEvents from './CharacterEvents'


const CharacterItem = ({character: {name, thumbnail, id, series, events}}) => {
    return (
        <Link to={`/characters/${id}`}>
            <div className="character-card">
                <div className="card-column">
                    <img className="character-thumb" alt={name} src={thumbnail.path + '.' + thumbnail.extension} />
                    <strong className="character-name">{name}</strong>
                </div>
                <div className="card-column xs-hide">
                    {series.items.length > 0 && (<CharacterSeries series={series} />)}
                </div>
                <div className="card-column xs-hide">
                {events.items.length > 0 && (<CharacterEvents events={events} />)}
                </div>
            </div>
        </Link>
        
        
    )
    
}

CharacterItem.propTypes = {
    character: PropTypes.object.isRequired,
}

export default CharacterItem
