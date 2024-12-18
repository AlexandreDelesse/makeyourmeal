# Étape 1 : Utiliser une image Node.js comme base
FROM node:20

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier uniquement les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances (sqlite3 inclus)
# Rebuild sqlite3 pour qu'il corresponde à l'architecture Docker
RUN npm install && npm rebuild sqlite3 --build-from-source

# Copier le reste du code source dans le conteneur
COPY . .

# Exposer le port sur lequel votre application écoute
EXPOSE 3001

# Commande pour démarrer l'application
CMD ["node", "index.js"]

