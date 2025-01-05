# README: Modifier les contenus dans Prismic, Airtable et Visual Studio Code

Ce document explique comment modifier les contenus de votre application ou site web en utilisant les outils **Prismic**, **Airtable**, et **Visual Studio Code** (VS Code).

---

## Table des matières

1. [Prismic](#prismic)
   - [Connexion à Prismic](#connexion-à-prismic)
   - [Modification d'un contenu existant](#modification-dun-contenu-existant)
   - [Ajout d'un nouveau contenu](#ajout-dun-nouveau-contenu)
   - [Publication ou mise à jour](#publication-ou-mise-à-jour)
2. [Airtable](#airtable)
   - [Connexion à Airtable](#connexion-à-airtable)
   - [Modification des entrées](#modification-des-entrées)
   - [Ajout de nouvelles entrées](#ajout-de-nouvelles-entrées)
   - [Sauvegarde et synchronisation](#sauvegarde-et-synchronisation)
3. [Visual Studio Code](#visual-studio-code)
   - [Installation de VS Code](#installation-de-vs-code)
   - [Configuration du projet](#configuration-du-projet)
   - [Édition des fichiers](#édition-des-fichiers)
   - [Utilisation des extensions](#utilisation-des-extensions)
4. [Bonnes pratiques](#bonnes-pratiques)

---

## Prismic

### Connexion à Prismic

1. Rendez-vous sur [Prismic.io](https://prismic.io/).
2. Connectez-vous avec vos identifiants (adresse e-mail et mot de passe).
3. Sélectionnez le dépôt correspondant à votre projet dans le tableau de bord.

### Modification d'un contenu existant

1. Une fois dans le dépôt, accédez à l'onglet **Documents**.
2. Recherchez le contenu que vous souhaitez modifier à l'aide de la barre de recherche ou en parcourant la liste.
3. Cliquez sur le document pour l'ouvrir.
4. Modifiez les champs nécessaires :
   - **Rich Text** : Modifiez les titres, paragraphes ou listes directement dans l'éditeur de texte.
   - **Images** : Cliquez sur le champ d'image pour uploader une nouvelle image.
   - **Liens** : Ajoutez ou modifiez les URL dans les champs de type lien.

### Ajout d'un nouveau contenu

1. Cliquez sur le bouton **Create New** dans la section **Documents**.
2. Choisissez le type de contenu (par exemple : Article, Page, etc.).
3. Remplissez les champs nécessaires dans l'éditeur.
4. Ajoutez des images, des vidéos ou d'autres éléments multimédias si besoin.

### Publication ou mise à jour

1. Une fois les modifications terminées, cliquez sur **Save**.
2. Cliquez sur **Publish** pour rendre le contenu disponible immédiatement ou sur **Schedule** pour planifier sa publication.
3. Vérifiez les modifications sur votre site web pour confirmer leur affichage.

---

## Airtable

### Connexion à Airtable

1. Accédez à [Airtable](https://airtable.com/).
2. Connectez-vous avec vos identifiants.
3. Sélectionnez la **base de données** correspondant à votre projet.

### Modification des entrées

1. Une fois dans la base, choisissez la **table** (par exemple : Articles, Produits, etc.).
2. Recherchez la ligne correspondant à l'entrée que vous voulez modifier.
3. Cliquez sur la cellule que vous souhaitez éditer et apportez vos modifications :
   - **Texte** : Modifiez directement les cellules textuelles.
   - **Images** : Glissez-déposez une nouvelle image dans le champ correspondant.
   - **Liens** : Remplacez les URL dans les champs concernés.

### Ajout de nouvelles entrées

1. Cliquez sur le bouton **+ Add record** en bas de la table.
2. Remplissez les champs requis pour la nouvelle entrée :
   - Ajoutez des informations comme le titre, la description, les images, etc.
   - Assurez-vous que tous les champs obligatoires sont remplis.

### Sauvegarde et synchronisation

1. Les modifications sont sauvegardées automatiquement dans Airtable.
2. Si vous utilisez une intégration (comme Zapier ou une API), assurez-vous que la synchronisation est activée pour envoyer les changements à votre site.

---

## Visual Studio Code

### Installation de VS Code

1. Téléchargez Visual Studio Code depuis le site officiel : [code.visualstudio.com](https://code.visualstudio.com/).
2. Installez-le sur votre machine en suivant les instructions pour votre système d'exploitation.

### Configuration du projet

1. Ouvrez VS Code.
2. Cliquez sur **File > Open Folder** et sélectionnez le dossier contenant votre projet.
3. Assurez-vous que les fichiers clés (comme `package.json`, `README.md`, ou les fichiers spécifiques au framework utilisé) sont présents dans le dossier.

### Édition des fichiers

1. Naviguez dans l'explorateur de fichiers (panneau à gauche).
2. Cliquez sur un fichier pour l'ouvrir dans l'éditeur.
3. Apportez vos modifications en fonction des besoins du projet.
4. Sauvegardez les fichiers modifiés en appuyant sur `Ctrl + S` (Windows/Linux) ou `Cmd + S` (Mac).

### Utilisation des extensions

1. Accédez à l'onglet **Extensions** (icône de carrés à gauche ou `Ctrl + Shift + X`).
2. Recherchez et installez les extensions recommandées pour votre projet, par exemple :
   - **Prettier** : Formatage automatique du code.
   - **ESLint** : Vérification des erreurs de code.
   - **GitLens** : Gestion avancée de Git.

---

## Bonnes pratiques

1. **Organisation des contenus** :

   - Classez vos contenus dans Prismic et Airtable de manière logique pour faciliter leur recherche.
   - Utilisez des conventions de nommage cohérentes (ex. : "article_nom-du-produit").

2. **Vérification avant publication** :

   - Relisez attentivement les textes.
   - Prévisualisez les modifications dans Prismic avant de publier.

3. **Gestion des images** :

   - Optimisez les images avant de les uploader pour améliorer les performances du site.
   - Utilisez des formats compatibles (JPEG, PNG, WebP).

4. **Collaboration** :

   - Si plusieurs personnes travaillent sur les mêmes outils, communiquez pour éviter les conflits.
   - Utilisez les fonctionnalités de commentaires dans Airtable ou Prismic pour laisser des notes.

5. **Gestion du code dans VS Code** :
   - Travaillez sur des branches Git distinctes pour chaque fonctionnalité ou correctif.
   - Assurez-vous que votre code est correctement formaté avant de le pousser (commits).
