FROM node:18
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i

EXPOSE 8080

CMD [ "npx", "@11ty/eleventy", "--serve", "--port=8080" ]