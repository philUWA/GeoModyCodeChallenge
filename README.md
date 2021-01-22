
```
                                                                        
     .-.   .-.  .-.          .-.                                  .---. 
    / \_\ / \_\/_/ \        / \_\    .                        .--.|   | 
   /  / //  / /\ \  \      /  / /  .'|                        |__||   | 
  /  / //  / /  \ \  \    /  / / .'  |           .|           .--.|   | 
 /  / //  / /    \ \  \  /  / / <    |         .' |_     __   |  ||   | 
'  <-<'  <-<      >->  `'  <-<   |   | ____  .'     | .:--.'. |  ||   | 
 \  \ \\  \ \    / /  /  \  \ \  |   | \ .' '--.  .-'/ |   \ ||  ||   | 
  \  \ \\  \ \  / /  /    \  \ \ |   |/  .     |  |  `" __ | ||  ||   | 
   \  \_\\  \_\/_/  /      \  \_\|    /\  \    |  |   .'.''| ||__||   | 
    \ / / \ / /\ \ /        \ / /|   |  \  \   |  '.'/ /   | |_   '---' 
     '-'   '-'  `-`          '-' '    \  \  \  |   / \ \._,\ '/         
                                '------'  '---'`'-'   `--'  `"          
```

## The setup

There he is again, just swimming around not contributing. That lazy, good for nothing goldfish. Jeff.

Doesn't he realise there is a financial crisis going on? The world is in the grip of a pandemic for God's sake. Yet there he is, just swimming laps and hanging out with his little old-timey diver statue, catching Zs in his little ruined castle.

Eventually you snap, and demand that he start paying rent. Time to get a job. Confused, the Jeff shrugs and mumbles that he really doesn't know much about anything. Not that he can remember anyway. With a flash of insight you point out that he has spent his entire life around glassware and liquids, a perfect CV for a barman.

You know that the biggest issue will be his short memory, but since you have been laid off due to the downturn and are still waiting for your OnlyFans to take off, you set out to make a simple tool for Jeff to use, so he can fake it until he makes it. And by **it** we mean enough money to cover your basic living expenses (until that OnlyFans starts bringing down the big bucks).

## The nitty gritty

Use this API! [TheCocktailDB](https://www.thecocktaildb.com/api.php).

- You are using TypeScript. We love types! When we see `any` without an exceptionally good reason, it fills us with a deep melancholy.
- You are using React
  - We love modern React, with the function component style. I'm not talking React.FC, I'm talking "component is a function" style.
  - We love React hooks! You should use this project as an opportunity to demonstrate your understanding of at least a few of them.

- We have installed
  - [Axios](https://github.com/axios/axios) for XHR requests.
  - [Jest](https://jestjs.io/) is provided for testing. Tests are important of course, but we don't expect you to do hardcore TDD. We use tests for anything novel that we write, to make sure that it works how we expect it to.
  - [fp-ts](https://github.com/gcanti/fp-ts) is provided if you want to use some more advanced functional programming techniques in your work. Think of this as optional! It definitely shouldn't distract you from just doing a nice job with regular TypeScript.

## The execution plan

### Keep in mind

- Goldfish are very aesthetically minded creatures, so it shouldn't be *too* ugly, you suppose.
- Perfect execution of this project would see three nicely constructed commits; one for each of these features (a0.1, a0.2, a0.3). (But obviously while you work you can commit as often as you like.)

### MVP `<<><ktail a0.1`

- Jeff can type in the name of a cocktail, and if it exists the ingredients will be displayed. If the cocktail doesn't exist, you mock him inventively because negative reinforcement is a critical part of your life philosophy. (It shouldn't be too hard to find an API to help with that...)

### `<<><ktail a0.2`

- To make Jeff's life easier, you decide to add a history of recent cocktails so he doesn't wear out his little flippers typing so much. The names of recently made cocktails should be added to this list, so Jeff can just select list item as a shortcut. Importantly, this list should not disappear when Jeff closes his browser and goes home for the night, but should visible when Jeff gets to work the next day and fires up his PocketPC again.

### `<<><ktail a0.3`

- Jeff has been getting a lot of people coming up to the bar making useless requests like "Do you have anything with fireball in it?" or "Can I get something with bleach and hydroxychloroquine?", and while goldfish are great at smalltalk, they are terrible with creative thinking. So you decide to give Jeff a tool where he can type in a few ingredients and try to find a recipe containing at least two of them.

```
                                                                        
     .-.   .-.  .-.          .-.                                  .---. 
    / \_\ / \_\/_/ \        / \_\    .                        .--.|   | 
   /  / //  / /\ \  \      /  / /  .'|                        |__||   | 
  /  / //  / /  \ \  \    /  / / .'  |           .|           .--.|   | 
 /  / //  / /    \ \  \  /  / / <    |         .' |_     __   |  ||   | 
'  <-<'  <-<      >->  `'  <-<   |   | ____  .'     | .:--.'. |  ||   | 
 \  \ \\  \ \    / /  /  \  \ \  |   | \ .' '--.  .-'/ |   \ ||  ||   | 
  \  \ \\  \ \  / /  /    \  \ \ |   |/  .     |  |  `" __ | ||  ||   | 
   \  \_\\  \_\/_/  /      \  \_\|    /\  \    |  |   .'.''| ||__||   | 
    \ / / \ / /\ \ /        \ / /|   |  \  \   |  '.'/ /   | |_   '---' 
     '-'   '-'  `-`          '-' '    \  \  \  |   / \ \._,\ '/         
                                '------'  '---'`'-'   `--'  `"          
```

# Standard boring details from `create-react-app`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
