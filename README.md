# Exercice Todolist avec Express.js et React

## Objectif

L'objectif de cet exercice est de créer une application Todolist en utilisant Express.js pour le côté serveur et React pour le côté client. L'exercice vise à pratiquer les concepts de routes, controllers et interactions avec une base de données MySQL.

## Tâches à accomplir

### Partie Serveur (Express.js et MySQL)

1. Installez les dépendances nécessaires :

   ```js
   npm install
   ```

2. Configurez une base de données MySQL. Créez une base de données `todolist_db` et une table `todos` avec les champs suivants :

   - `id` (auto-incrémenté)
   - `task` (texte de la tâche)
   - `completed` (booléen indiquant si la tâche est complétée)

3. Connectez-vous à la base de données MySQL depuis votre application Express.js.
4. Créez les routes suivantes dans votre application Express.js :
   - `GET /api/todos` : Récupérer toutes les tâches de la base de données.
   - `POST /api/todos` : Ajouter une nouvelle tâche à la base de données.
   - `PUT /api/todos/:id` : Mettre à jour une tâche existante dans la base de données. (Permets de marquer une tâche comme complétée/en cours)
   - `DELETE /api/todos/:id` : Supprimer une tâche de la base de données.
5. Créez le un fichier `todoControllers` qui contiendra la logique de vos routes en utilisant la nomenclature `BREAD` (cf. le fichier `itemControllers.js`).
6. Créez le fichier `TodoManager.js` qui contiendra les fonctions permettant d'interagir avec la base de données. Importez ce fichier dans vos controllers pour utiliser les fonctions.
7. Importez et ajouter votre fichier `TodoManager.js` dans le fichier `tables.js`.

### Partie Client (React)

1. Créez une nouvelle route `/todos` dans votre application React.
2. Créez une page `TodoPage`.
3. Créez un composant `Todolist` qui affiche la liste des tâches.
4. Utilisez l'API Express.js pour récupérer la liste des tâches et les afficher dans votre composant `Todolist`.
5. Ajoutez la possibilité d'ajouter de nouvelles tâches en utilisant l'API Express.js dans un nouveau composant.
6. Ajoutez des fonctionnalités pour marquer une tâche comme complétée ou supprimer une tâche.

## Bonus

- Ajoutez des styles CSS pour améliorer l'apparence de votre application Todolist.

## Ressources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [MySQL Documentation](https://dev.mysql.com/doc/)

Cet exercice vous permettra de vous familiariser avec la création d'une application complète utilisant Express.js et React, en mettant l'accent sur les interactions avec une base de données MySQL. Bonne chance !
