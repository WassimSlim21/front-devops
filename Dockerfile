FROM node:latest

WORKDIR .

COPY . /usr/src/app/

RUN npm install && npm run ng build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build-stage /app/dist/devops-front .

ENTRYPOINT [ "nginx" , "-g" , "daemon off;" ]
