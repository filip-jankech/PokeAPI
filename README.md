PROJECT DOCUMENTATION

This project was built as a part of a work application assessment.

SOLUTION DESCRIPTION

The main goal of the app is to fetch the data about the first 9 pokemons from the Pokemon API and render the name and image of the one chosen by the user. The fetching of the data is done on the app root level (App.js). The functions fetching the data are complemented with two useState hooks, one for the handling of the fetched data and one for the handling of the loading state of the app.

The data from the root level are passed down to the 'accordion' element (Accordion.js). This element is responsible for the visual interpretation of these data. There are 3 useState hooks that manage the state of these 'accordions' (there is one for each displayed pokemon) depending on the interaction of the user (after clicking on each of them, the image of the pokemon is displayed).

POSSIBLE IMPROVEMENTS

In case the application grew bigger, it would be better to manage the state of the whole application on the global level.