import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Characters from './components/characters/Characters'
import Character from './components/characters/Character'
import Search from './components/characters/Search'
import Alert from './components/layout/Alert'
import Details from './components/pages/Details'
import Pagination from './components/layout/Pagination'
import axios from 'axios'
import { Component, Fragment } from 'react'
import CryptoJS from 'crypto-js'

class App extends Component {
  state = {
    result: [],
    characters: [],
    character: [],
    loading: false,
    alert: null,
    setOffset: 0,
    showPagination: true
  }

  async componentDidMount() {

      let timestamp = new Date().getTime();
      let messagehash = timestamp+process.env.REACT_APP_MARVEL_PRIVATE_KEY+process.env.REACT_APP_MARVEL_PUBLIC_KEY;
      let marvelhash = CryptoJS.MD5(messagehash);
      let limitcharacters = 10;
     
      this.setState({ loading: true, showPagination: true });

      const res = await axios.get(`http://gateway.marvel.com/v1/public/characters?&limit=${limitcharacters}&ts=${timestamp}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${marvelhash.toString()}`);

      this.setState({ characters: res.data.data.results, loading: false, result: res.data.data })

  }

  searchCharacters = async text => {

    this.setState({loading: true, showPagination: false});

    let timestamp = new Date().getTime();
    let messagehash = timestamp+process.env.REACT_APP_MARVEL_PRIVATE_KEY+process.env.REACT_APP_MARVEL_PUBLIC_KEY;
    let marvelhash = CryptoJS.MD5(messagehash);
    let limitcharacters = 10;
    
    this.setState({ loading: true });

    const res = await axios.get(`http://gateway.marvel.com/v1/public/characters?name=${text}&limit=${limitcharacters}&ts=${timestamp}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${marvelhash.toString()}`);


    this.setState({ characters: res.data.data.results, loading: false })
  }

  getCharacter = async (id) => {
    this.setState({loading: true, showPagination: false});

    let timestamp = new Date().getTime();
    let messagehash = timestamp+process.env.REACT_APP_MARVEL_PRIVATE_KEY+process.env.REACT_APP_MARVEL_PUBLIC_KEY;
    let marvelhash = CryptoJS.MD5(messagehash);
    
    this.setState({ loading: true });

    const res = await axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=${timestamp}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${marvelhash.toString()}`);


    this.setState({ character: res.data.data.results, loading: false })

    
  }

  setOffset = async (offset) => {
      let timestamp = new Date().getTime();
      let messagehash = timestamp+process.env.REACT_APP_MARVEL_PRIVATE_KEY+process.env.REACT_APP_MARVEL_PUBLIC_KEY;
      let marvelhash = CryptoJS.MD5(messagehash);
      let limitcharacters = 10;
     
      this.setState({ loading: true });

      const res = await axios.get(`http://gateway.marvel.com/v1/public/characters?offset=${offset}&limit=${limitcharacters}&ts=${timestamp}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${marvelhash.toString()}`);

      this.setState({ characters: res.data.data.results, loading: false, result: res.data.data, setOffset: offset })

  }

  clearCharacters = () => this.setState({ characters: [], loading: false})

  setAlert = (msg) => {
    this.setState({alert: {msg: msg}})

    setTimeout(() => this.setState({alert: null}), 3000)
  }

  render() {

    const { characters, character, loading} = this.state

    return (
      <Router>
        <div className="App">
          <Navbar nome="Celso Martins" />

          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <div className="container">
                  <div className="row">
                    <Search searchCharacters={this.searchCharacters} clearCharacters={this.clearCharacters} showClear={characters.length > 0 ? true : false} setAlert={this.setAlert} />
                    <Alert alert={this.state.alert} />
                  </div>
                  <div className="row">
                    <Characters loading={loading} characters={characters} />
                  </div>
                  
                </div>
              </Fragment>
            )} />
            <Route exact path='/details' component={Details} />
            <Route exact path='/characters/:id' render={props => (
              <Character {...props} getCharacter={this.getCharacter} character={character} />
            )}  />
          </Switch>
          {this.state.showPagination && (
            <Pagination limit={this.state.result.limit} total={this.state.result.total} offset={this.state.result.offset} setOffset={this.setOffset} />
          )}
          
        </div>
      </Router>
    );
  }
}

export default App;
