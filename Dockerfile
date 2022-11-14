FROM node:14.21.1

WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 4200

CMD npm run start