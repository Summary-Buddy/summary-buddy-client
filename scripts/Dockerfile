# base image
FROM node:20.11.1-alpine3.19 AS build

# set working directory
WORKDIR /app

# exposing all our Node.js binaries
ENV PATH=/app/node_modules/.bin:$PATH

# Copy package.json
COPY package.json /app/package.json

# npm install
RUN npm install

# add app
COPY . /app

# build app
RUN npm run build

EXPOSE 3000

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["npm", "start"]