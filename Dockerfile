FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

EXPOSE 4200

CMD npm run start