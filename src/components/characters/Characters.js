import React from 'react'
import CharacterItem from './CharacterItem';
import Loading from '../layout/Loading'
import PropTypes from 'prop-types'


const Characters = ({characters, loading}) => {

    if(loading) {
        return <Loading />
    } else {
        return (
            <div>
                <div className="row card-titles">
                    <p>Personagens</p>
                    <p className="xs-hide">Séries</p>
                    <p className="xs-hide">Eventos</p>
                </div>
                <div className="row card-link">
                    {characters.map(character => (
                        <CharacterItem key={character.id} character={character} />
                    ))}
                </div>
                
            </div>
        )
    }
    
}

Characters.propTypes = {
    characters: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Characters
