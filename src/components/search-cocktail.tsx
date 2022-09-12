import {searchCocktailBIngredient, searchCocktailByName} from "./cocktail-service";
import React, {Component} from 'react';
// import fs from "fs"; // Attempted to use fs.readFile to store cocktail favorites list locally... no luck.

class SearchCocktail extends Component {
    state = {
        cocktailName: "" as string,
        firstSuggestion: "" as string,
        secondSuggestion: "" as string,
        cocktailIngredients: [] as string[],
        ingredientErrorMessage: false as boolean,
        suggestionErrorMessage: false as boolean,
        favorites: [] as string[],
        recommendedDrinks: [] as string[]
    }

    onInputChange = (event: { target: { name: string; value: string; }; }) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onFavoritesChange = (event: { target: { name: string; value: string; }; }) => {
        this.setState({
            cocktailName: event.target.value
        });
    }

    onSuggestionChange = (event: { target: { name: string; value: string; }; }) => {
        this.setState({
            cocktailName: "",
            [event.target.name]: event.target.value
        });
    }

    updateIngredients = (ingredients: string[], ingredientErrorMessage: boolean) => {
        this.setState({
            cocktailIngredients: ingredients,
            recommendedDrinks: [],
            ingredientErrorMessage: ingredientErrorMessage,
            suggestionErrorMessage: false
        });
    }

    render() {
        const search = () => {
            if (this.state.firstSuggestion != "" && this.state.secondSuggestion != "") {
                searchByIngredients();
            } else if (this.state.cocktailName && this.state.cocktailName != "a") {
                searchByCocktailName();
            } else {
                this.updateIngredients([], true);
            }
        };

        const searchByIngredients = async () => {
            this.setState({
                recommendedDrinks: [],
                cocktailIngredients: []
            });
            const firstSuggestion = await searchCocktailBIngredient(this.state.firstSuggestion).then((response) => response?.data?.drinks).catch((error) => {console.log("An issue has occurred", error);});
            const secondSuggestion = await searchCocktailBIngredient(this.state.secondSuggestion).then((response) => response?.data?.drinks).catch((error) => {console.log("An issue has occurred", error);});
            let recommendedDrinks: string[] = [];

            if (firstSuggestion && secondSuggestion) {
                firstSuggestion.forEach((s1: any) => {
                    secondSuggestion.forEach((s2: any) => {
                        if (s1.idDrink == s2.idDrink) {
                            recommendedDrinks.push(s2.strDrink);
                        }
                    })
                });
            }
            this.setState({
                recommendedDrinks: recommendedDrinks,
                suggestionErrorMessage: recommendedDrinks.length == 0
            });
        }

        const searchByCocktailName = () => {
            searchCocktailByName(this.state.cocktailName).then((response) => {
                let ingredients: string[] = [];
                if (response?.data?.drinks) {
                    let matchingDrink: any = response.data.drinks.find((drink: any) => {
                        return drink.strDrink.toLowerCase() == this.state.cocktailName.toLowerCase();
                    });

                    if (matchingDrink) {
                        Object.entries(matchingDrink).forEach(([key, value]) => {
                            if (key.startsWith("strIngredient") && typeof value === "string") {
                                ingredients.push(value);
                            }
                        });

                        if (!this.state.favorites.includes(matchingDrink.strDrink)) {
                            this.state.favorites.push(matchingDrink.strDrink);
                        }
                    }
                    this.updateIngredients(ingredients, false);

                } else {
                    this.updateIngredients([], true);
                }
            }).catch((error) => {
                console.log("An issue has occurred", error);
            });
        }

        return (
            <header className="search-cocktail-header">
                <input type={'text'} name="cocktailName" value={this.state.cocktailName} onChange={this.onInputChange}
                       placeholder="Cocktail..." className={'text-box'} disabled={this.state.firstSuggestion != "" || this.state.secondSuggestion != ""}/>
                <select name="favorites" value={this.state.cocktailName} onChange={this.onFavoritesChange} hidden={this.state.favorites.length == 0}>
                    {this.state.favorites.map((fav) => {
                        return <option key={fav}>{fav}</option>;
                    })}
                </select>

                <br/>
                <input type={'text'} name="firstSuggestion" value={this.state.firstSuggestion} onChange={this.onSuggestionChange}
                       placeholder="First ingredient" className={'text-box'}/>
                <input type={'text'} name="secondSuggestion" value={this.state.secondSuggestion} onChange={this.onSuggestionChange}
                       placeholder="Second ingredient" className={'text-box'}/>

                <br/>
                <input type={'button'} onClick={search} value={'Search Cocktail'} className={'button'}/>
                <p style={{ color: "red" }}>{this.state.ingredientErrorMessage ? "That won't do!" : ""}</p>
                <p style={{ color: "red" }}>{this.state.suggestionErrorMessage ? "No drinks that contain those two ingredients" : ""}</p>

                <h4 style={{ color: "green" }} hidden={this.state.cocktailIngredients.length == 0}>Cocktail Ingredients</h4>
                <table>
                    <tbody>
                    {this.state.cocktailIngredients.map((ing) => {
                        return <tr key={ing}><td>{ing}</td></tr>
                    })}
                    </tbody>
                </table>

                <h4 style={{ color: "green" }} hidden={this.state.recommendedDrinks.length == 0}>Recommended Drinks List</h4>
                <table>
                    <tbody>
                    {this.state.recommendedDrinks.map((ing) => {
                        return <tr key={ing}><td>{ing}</td></tr>
                    })}
                    </tbody>
                </table>

            </header>
        );
    }
}

export default SearchCocktail;
