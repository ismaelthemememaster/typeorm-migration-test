FROM node:14.17-alpine as build

WORKDIR /build
COPY . .
RUN npm install
RUN npm run build

EXPOSE 5100
CMD [ "npm", "start" ]