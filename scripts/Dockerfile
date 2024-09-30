FROM node:20.11.1-alpine3.19 AS build

WORKDIR /app

ENV PATH=/app/node_modules/.bin:$PATH

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY nginx/nginx.conf /etc/nginx/conf.d

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]