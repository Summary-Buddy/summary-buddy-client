FROM node:20.11.1-alpine3.19 AS build

WORKDIR /app

ENV PATH=/app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "start"]