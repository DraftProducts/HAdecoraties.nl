# HAdecoraties

## A Propos
HAdecoraties.nl est le site d'une crée en 2016 réalisant des coussins,lampes et autres décorations d'interieur & exterieur. 
Pour celà j'ai choisi de partir sur le Framework [AdonisJs](https://adonisjs.com) qui est un framework web basé sur du nodejs fonctionnant avec la structure [MVC](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur).

## Installation
- Executer `git clone https://github.com/DraftProducts/HAdecoraties.git` pour télécharger le projet
- Executez `cd HAdecoraties.fr/` pour vous rendre dans le dossier du projet
- Executer `npm install` pour installer toutes les dependances
- Dupliquer le fichier `.env.exemple` en `.env`
- Executer `adonis key:generate` pour ajouter la clé dans le fichier `.env`
- Executer `adonis migration:run` pour mettre en place la base de donnée
- Executer `adonis serve --dev` ou `node server.js` pour lancer l'application