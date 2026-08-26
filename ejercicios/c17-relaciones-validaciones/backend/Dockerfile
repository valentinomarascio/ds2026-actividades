FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@11.12.1

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]