## Mon jeu TIC TAC TOE 

[Dans ce readme je vous explique le process de création de mon code]

Ceci est un jeu simple de Tic-Tac-Toe implémenté en JavaScript qui peut être joué dans le navigateur.


This is a simple Tic-Tac-Toe game implemented in JavaScript that can be played in the browser.

## Table of contents / Sommaire

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built process](#built-with)
  - [What we can learn in this project](#what-we-can-learn-in-this-project)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview / Résumé


Voici une explication du code pour l'implémentation du jeu classique Tic-Tac-Toe. Le jeu se joue sur une grille de 3x3, et les joueurs marquent à tour de rôle un X ou un O dans une cellule. Le premier joueur qui aligne trois symboles identiques remporte la partie. Le code utilise le Document Object Model (DOM) pour rendre dynamiquement le plateau de jeu et mettre à jour l'état du jeu.

Globalement, créer un jeu comme Tic-Tac-Toe peut être un excellent moyen d'en apprendre davantage sur le développement web, et c'est toujours satisfaisant de voir un jeu fonctionnel prendre vie grâce à votre code.


This is a code explain implementation of the classic game Tic-Tac-Toe. The game is played on a 3x3 grid, and players take turns marking X or O in a cell. The first player to get three in a row wins the game. The code uses the Document Object Model (DOM) to dynamically render the game board and update the game state.

Overall, creating a game like Tic-Tac-Toe can be a great way to learn more about web development, and it's always satisfying to see a functioning game come to life through your code.


### Screenshot

![Mobile screen](./screenShot/mobile-tictactoe-YunusYildiz.png)

## Process


1 - Le code utilise un écouteur d'événement pour vérifier si l'une des cases du jeu est cliquée, puis appelle la fonction `boxChecker()`.

2 - La fonction `boxChecker()` vérifie si la case cliquée a déjà été sélectionnée et retourne `false` si c'est le cas. Si la case n'a pas été sélectionnée, la fonction détermine ensuite si elle doit afficher un "X" ou un "O" dans la case, en fonction du tour du joueur actuel. La fonction met alors à jour l'objet `boxesState` avec le numéro du joueur actuel et appelle les fonctions `verifyVictory()` et `turnSwitcher()`.

3 - La fonction `turnSwitcher()` change le joueur actuel pour passer au tour de l'autre joueur et met à jour la variable `currentPlayer` pour refléter le changement.

4 - La fonction `verifyVictory()` vérifie si l'un des joueurs a gagné la partie ou si la partie s'est terminée par un match nul. Si un joueur a gagné la partie, la fonction `victoryAlert()` est appelée et le score du joueur gagnant est mis à jour. Si la partie s'est terminée par un match nul, la fonction `nullAlert()` est appelée et le nombre de parties nulles est mis à jour. Sinon, la fonction retourne `false`.

5 - La fonction `victoryAlert()` affiche un message au joueur qui a gagné la partie, puis réinitialise le plateau de jeu en appelant la fonction `gameReset()`.

6 - La fonction `nullAlert()` affiche un message aux joueurs indiquant que la partie s'est terminée par un match nul, puis réinitialise le plateau de jeu en appelant la fonction `gameReset()`.

7 - La fonction `gameReset()` réinitialise l'objet `boxesState` et efface le contenu de toutes les cases sur le plateau de jeu.


1 - The code uses an event code explain to check if any of the boxes in the game are clicked, and then calls the boxChecker() function.

2 - The boxChecker() function checks if the clicked box has already been selected and returns false if it has. 
If the box hasn't been selected, the function then determines whether to display an "X" or an "O" on the box based on the current player's turn. The function then updates the boxesState object with the current player's number and calls the verifyVictory() and turnSwitcher() functions.

3 - The turnSwitcher() function switches the current player to the other player's turn and updates the currentPlayer variable to reflect the change.

4 - The verifyVictory() function checks if any of the players have won the game or if the game has ended in a tie. If a player has won the game, the victoryAlert() function is called and the winning player's score is updated. If the game has ended in a tie, the nullAlert() function is called and the number of tie games is updated. Otherwise, the function returns false.

5 - The victoryAlert() function displays a message to the player who won the game and then resets the game board by calling the gameReset() function.

6 - The nullAlert() function displays a message to the players that the game has ended in a tie and then resets the game board by calling the gameReset() function.

7 - The gameReset() function resets the boxesState object and clears the contents of all the boxes on the game board.

### Built with / Fait avec

- CSS
- JavaScript 

### What we can learn in this project / Ce que l'on apprend 
Bien sûr ! Voici la traduction en français de votre texte :

1. Manipulation du DOM :
   - Le projet du jeu de morpion offre une excellente opportunité d'apprendre et de pratiquer quelques concepts fondamentaux du développement web. Dans ce projet, vous apprendrez comment manipuler le Modèle d'Objet Document (DOM) pour mettre à jour dynamiquement le contenu d'une page web. Cette compétence est particulièrement importante pour la création de pages web interactives et dynamiques.

2. Travail avec les objets :
   - Vous apprendrez également à travailler avec les objets en JavaScript. Dans le projet du jeu de morpion, vous utiliserez des objets pour stocker l'état du jeu et les informations des joueurs. Cela vous permettra d'accéder et de mettre à jour les données du jeu plus facilement tout au long du code. Vous utiliserez également des objets pour représenter le plateau de jeu, ce qui vous aidera à vérifier les conditions de victoire de manière plus efficace.

3. Travail avec les fonctions / Fonctions fléchées :
   - Les fonctions sont un concept fondamental en JavaScript, et vous les utiliserez pour gérer divers aspects de la logique du jeu, tels que la vérification d'un gagnant ou la mise à jour de l'état du jeu. Les fonctions fléchées, quant à elles, offrent une manière plus concise et élégante d'écrire des fonctions en JavaScript.

En accomplissant ce projet, vous acquerrez une compréhension plus approfondie de ces concepts fondamentaux du développement web. Vous gagnerez également de l'expérience pratique dans l'utilisation de ces concepts pour créer un jeu de morpion fonctionnel et interactif. Ce projet est une excellente opportunité pour quiconque souhaite améliorer ses compétences en développement web.


1 - Manipulating the DOM
2 - Working with Objects
3 - Working with Functions / Arrow Functions

The tic-tac-toe game project provides an excellent opportunity to learn and practice some fundamental web development concepts. In this project, you will learn how to manipulate the Document Object Model (DOM) to dynamically update the content on a web page. This skill is particularly important for creating interactive and dynamic web pages.

You will also learn how to work with objects in JavaScript. In the tic-tac-toe game project, you will use objects to store the game state and player information. This will allow you to access and update the game data throughout the code more easily. You will also use objects to represent the game board, which will help you to check for winning conditions more efficiently.

The project also involves working with functions and arrow functions. Functions are a core concept in JavaScript, and you will use them to handle various aspects of the game logic, such as checking for a winner or updating the game state. Arrow functions, on the other hand, provide a more concise and elegant way to write functions in JavaScript.

By completing this project, you will gain a deeper understanding of these fundamental web development concepts. You will also gain practical experience in using these concepts to create a functional and interactive tic-tac-toe game. This project is an excellent opportunity for anyone looking to improve their skills in web development.

### Useful resources

- This an amazing screenShot tool - [GoFULLPage Chrome extension](https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl/related) 

## Author


Je suis un développeur JavaScript passionné par le développement web. Je suis activement à la recherche d'opportunités d'emploi pour développer davantage mes compétences et acquérir une expérience pratique.

N'hésitez pas à me contacter via mon compte LinkedIn ou par e-mail à yunusyildiz44800@gmail.com. 

- [Ma chaîne YouTube](https://www.youtube.com/channel/UCD8fe5DDbNPYcfezil6MraQ) (Peut-être que j'y produirai du contenu de développement)
- [Mon profil LinkedIn](https://www.linkedin.com/in/yunus-yildiz-b919b7206/)


I am a JavaScript developer who is passionate about web development.

Please don't hesitate to contact me through my LinkedIn account or email at yunusyildiz44800@gmail.com. 

- [My Youtube chanel](https://www.youtube.com/channel/UCD8fe5DDbNPYcfezil6MraQ) (Maybe I'll produce some dev stuff on it)
- [My linkedin](https://www.linkedin.com/in/yunus-yildiz-b919b7206/) 
