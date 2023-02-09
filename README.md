# POKEMON WEB SITE 
*** 
A web page is created that shows the pokemons consumed from the same API 
***
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## table of Contents
1. [API](#API)
2. [How it works](#How-it-works)
3. [Points to improve](#points-to-improve)

### General Info
***

The website has 2 pages, which are the main page and the page that shows the characteristics of each pokemon and also a plate of food that is consumed from another api.



### API Documentation
***
This project consumes data from 2 APIs:
* PokeApi: https://pokeapi.co/ <-- Here we bring all the pokemons and their characteristics.
* TheMealDB: https://www.themealdb.com/api.php <--- Here we bring food dishes with their ingredients which are nested to each pokemon.


### How it works
***
The body of the web page is made up of various elements that have been saved in their respective folder.

<input> makes an api call with the name of the pokemon, if the name is incorrect it will output a message that the name is not correct.

"pokemon cards", each pokemon has an id that is passed through params to open another page with the characteristics of said pokemon and a plate of food.

### Points to improve

trying to create a bar to get a list of the following pokemons had a failure in a future update that point will be improved