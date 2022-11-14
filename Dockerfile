### STAGE 1: Build ###
FROM node:14.21.1-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build nginx.conf /etc/nginx/nginx.conf
COPY /dist/crudtuto-Front /usr/share/nginx/html