# Utilise une image de base légère
FROM node:18-alpine

# Configure le répertoire de travail
WORKDIR /app

# Copie uniquement les fichiers nécessaires pour installer les dépendances
COPY package.json package-lock.json ./

# Installe les dépendances de Node.js
RUN npm install --production && rm -rf /root/.npm

# Copie tout le reste des fichiers
COPY . .

# Compile l'application React pour la production
RUN npm run build

# Expose le port pour le serveur React
EXPOSE 3000

# Démarre le serveur React avec `serve`
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
