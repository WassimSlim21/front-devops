FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular

RUN npm install

EXPOSE 4200

CMD npm run start