# Utiliser une image Node.js en tant qu'image de base
FROM node:14-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Construire l'application React
RUN npm run build

# Exposer le port 3000 (ou le port que votre application utilise)
EXPOSE 3000

# Commande pour démarrer l'application lorsqu'un conteneur basé sur cette image est lancé
CMD ["npm", "start"]
