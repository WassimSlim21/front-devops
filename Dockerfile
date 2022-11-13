FROM node:14

WORKDIR /usr/src/app/app-ui

COPY package*.json ./

RUN npm install -g npm@latest

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install && npm update --force

EXPOSE 4200

CMD ["npm", "start"]