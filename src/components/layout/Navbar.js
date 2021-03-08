import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Logo from './logo.svg'


const Navbar = ({nome}) =>  {
    return (
        <nav className="navbar-top">
            <div className="logo">
                <Link to='/'><img className="logo-objective" src={Logo} alt="Objective" /></Link>
            </div>
            <div className="candidato">
                <div className="candidato-details"><strong>{nome}</strong></div>
                <div className="candidato-details">Teste de Front-end</div>
            </div>
            <div className="candidato-thumb">
                <span className="name-inicials">CM</span>
            </div>
            
        </nav>
    )
}

Navbar.defaultProps = {
    nome: 'Nome do Candidato'
}

Navbar.propTypes = {
    nome: PropTypes.string.isRequired
}

export default Navbar
