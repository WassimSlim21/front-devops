FROM node:14.17.0

WORKDIR /root/src/app/front-achat

COPY package*.json ./

RUN npm install -g npm@latest

RUN npm install -g @angular/cli @angular-devkit/build-angular

RUN npm install

EXPOSE 4200

CMD ["npm", "start"]