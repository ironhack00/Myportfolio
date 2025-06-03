
# Usamos la imagen oficial de Node.js 18
FROM node:18

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto 3000 (donde corre Next.js)
EXPOSE 3000

# Comando para iniciar el servidor en modo desarrollo con Turbopack
CMD ["npm", "run", "dev"]
