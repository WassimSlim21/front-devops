FROM node:10

WORKDIR /usr/src/app/app-ui

COPY package*.json ./

RUN npm install -g npm@latest

RUN npm install -g @angular/cli:latest @angular-devkit/build-angular && npm install

EXPOSE 4200

CMD ["npm", "start"]