# build stage
FROM node:14.15.1-alpine as build-stage

RUN apk add g++ make python2

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm update  vue-loader

RUN npm add core-js

COPY . .

RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
