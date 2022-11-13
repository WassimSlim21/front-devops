FROM node:latest AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm update --force

RUN npm install --legacy-peer-deps

EXPOSE 4200

RUN npm run build
