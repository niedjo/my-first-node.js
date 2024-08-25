# My First Node.js API

**My First Node.js** est une API simple développée en **Node.js** qui permet de créer, lire, mettre à jour, et supprimer des publications (posts). Cette API est construite avec **Express** pour la gestion des requêtes HTTP et **Mongoose** pour interagir avec une base de données MongoDB. Elle inclut également des fonctionnalités pour "liker" et "disliker" des publications.

## Fonctionnalités

- **Créer une publication** : Permet de créer une nouvelle publication avec un message et un auteur.
- **Récupérer les publications** : Permet de récupérer toutes les publications.
- **Mettre à jour une publication** : Permet de modifier une publication existante.
- **Supprimer une publication** : Permet de supprimer une publication.
- **Liker une publication** : Permet d'ajouter un like à une publication.
- **Disliker une publication** : Permet de retirer un like d'une publication.

## Structure du Projet

Le projet est organisé comme suit :

```
|-- config/
|-- controllers/
|-- models/
|-- routes/
|-- .env
|-- package.json
|-- README.md
|-- index.js
```

- **config/** : Contient le fichier de configuration de la base de donnees.
- **controllers/** : Contient les contrôleurs pour gérer les opérations CRUD sur les publications.
- **models/** : Contient les modèles Mongoose pour la structure des données.
- **routes/** : Définit les routes de l'API pour la gestion des publications.
- **index.js** : Point d'entrée principal de l'application.

## Installation

### Prérequis

- **Node.js** version 16 ou supérieure
- **MongoDB** pour la base de données

### Étapes d'installation

1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/niedjo/my-first-node.js.git
   cd my-first-node.js
   ```

2. **Installez les dépendances** :
   ```bash
   npm install
   ```

3. **Configurez les variables d'environnement** :
   Créez un fichier `.env` à la racine du projet avec les informations suivantes :
   ```
   MONGO_URI=<votre_uri_mongodb>
   ```

4. **Lancez l'application** :
   ```bash
   npm start
   ```

## Utilisation

### Endpoints de l'API

- **Créer une publication**
  - `POST /api/posts` : Crée une nouvelle publication.

  **Corps de la requête** :
  ```json
  {
    "message": "Contenu de la publication",
    "author": "Auteur de la publication"
  }
  ```

- **Récupérer toutes les publications**
  - `GET /api/posts` : Récupère toutes les publications existantes.

- **Mettre à jour une publication**
  - `PUT /api/posts/:id` : Met à jour une publication existante par son ID.

  **Corps de la requête** :
  ```json
  {
    "message": "Nouveau contenu de la publication"
  }
  ```

- **Supprimer une publication**
  - `DELETE /api/posts/:id` : Supprime une publication par son ID.

- **Liker une publication**
  - `PUT /api/posts/:id/like` : Ajoute un like à une publication.

  **Corps de la requête** :
  ```json
  {
    "userId": "ID de l'utilisateur"
  }
  ```

- **Disliker une publication**
  - `PUT /api/posts/:id/dislike` : Retire un like d'une publication.

  **Corps de la requête** :
  ```json
  {
    "userId": "ID de l'utilisateur"
  }
  ```

### Exemple de Modèle de Données

#### Post

```javascript
{
    message: String,
    author: String,
    likers: [String],
    createdAt: Date,
    updatedAt: Date
}
```

## Technologies Utilisées

- **Node.js** : Pour la création de l'API.
- **Express** : Pour gérer les requêtes HTTP.
- **Mongoose** : Pour la gestion des données dans MongoDB.
- **Nodemon** : Pour redémarrer automatiquement le serveur en cas de changement de code.

## License

Ce projet est sous licence ISC.