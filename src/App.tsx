import React, {Component} from 'react';
import './App.css';
import './components/search-cocktail'
import SearchCocktail from "./components/search-cocktail";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <SearchCocktail/>
                </header>
            </div>
        );
    }
}

export default App;
