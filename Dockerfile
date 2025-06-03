# Usamos la imagen oficial de Node.js 18
FROM node:18

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos dependencias y las instalamos
COPY package*.json ./
RUN npm install

# Copiamos el resto del código
COPY . .

# Le damos permisos al pipeline
RUN chmod +x pipeline.sh

# Exponemos puerto
EXPOSE 3000

# Comando por defecto
CMD ["npm", "run", "dev"]
    
