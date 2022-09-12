import axios from "axios";

const api = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/'
})

export const searchCocktailByName = (cocktailName: string): Promise<any> =>  {
    return api.get('search.php?s=' + cocktailName);
}

export const searchCocktailBIngredient = (ingredient: string): Promise<any> =>  {
    return api.get('filter.php?i=' + ingredient);
}


