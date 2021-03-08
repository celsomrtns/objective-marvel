import React, { Component } from 'react'
import CharacterComics from './CharacterComics';

let timestamp = new Date().getTime();

class Character extends Component {
    componentDidMount() {
        this.props.getCharacter(this.props.match.params.id)
    }

    render() {
       const personagem = this.props.character
    
        return (
            <div>
                <p>{console.log("Personagem....", personagem)}</p>
                {personagem.map(result => (
                    <div key={timestamp = timestamp + 1}>
                        <div className="container">
                            <h1>{result.name}</h1>
                        </div>
                        <div className="row destaque" style={{ backgroundImage: `url(${result.thumbnail.path}.${result.thumbnail.extension})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        </div>

                        <div className="container">
                            <h2>{result.description}</h2>
                            <div className="row">
                                <CharacterComics comics={result} />
                            </div>
                        </div>

                    </div>
                ))}
                
            </div>
        )
    }
}

export default Character
