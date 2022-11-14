FROM node:14.21.1

WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 4200

#CMD npm run start


# Run the angular in product
RUN npm run build

# Stage 2
FROM nginx:1.13.12-alpine

#copy dist content to html nginx folder, config nginx to point in index.html
COPY --from=node /usr/src/app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
