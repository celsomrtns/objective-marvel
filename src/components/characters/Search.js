import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {

    state = {
        text: ''
    }

    static propTypes = {
        searchCharacters: PropTypes.func.isRequired,
        clearCharacters: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === '') {
            this.props.setAlert('You have to type a name')
        } else {
            this.props.searchCharacters(this.state.text);
            this.setState({text: ''});
        }
        
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="searchbox">
                <h1>Busca de Personagens</h1>
                <p>Nome do Personagem</p>
                <form onSubmit={this.onSubmit}>
                    <input className="search-field" type="text" name="text" placeholder="Search..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Buscar" />
                </form>
                {this.props.showClear && (<button className="hide" onClick={this.props.clearCharacters}>Limpar</button>)}
            </div>
        )
    }
}

export default Search
