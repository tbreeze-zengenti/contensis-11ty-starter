FROM node:18-alpine
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
COPY ./. /usr/src/app

RUN npm i

EXPOSE 8080

CMD [ "npx", "@11ty/eleventy", "--serve", "--port=8080" ]